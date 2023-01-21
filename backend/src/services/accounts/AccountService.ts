import MongoModelFactory from "../../models/factorys/MongoModelFactory";
import bcrypt from "bcrypt";
import jwt, { JwtPayload } from "jsonwebtoken";
import { Account } from "../../models/IAccountModel";
import { daofactory } from "../../app";
import { REFRESH_SECRET, SECRET } from "../../config";
import { IGetAccountBody, ILoginBody, IRegisterBody, IRenewHeaders } from "../../api/account/IAccountsBody";

export default class AccountService {
  public static async login(body: ILoginBody) {
    let accounts = daofactory.createAccount();

    try {
      let account: Account = await accounts.readAccountByEmail(body.email);

      if (!account) {
        throw new Error("Compte inexistant !");
      }

      if (await bcrypt.compare(body.password, account.password)) {
        const token = this.generateToken(account);
        const refreshToken = this.generateRefreshToken(account);
        return { token: token, refreshToken: refreshToken };
      }
      else {
        throw new Error(`Error. User ${body.email} don't exist or wrong password !`);
      }


    } catch {
      throw new Error(`Error. User ${body.email} don't exist or wrong password !`);
    }
  }

  public static async register(body: IRegisterBody) {
    let accounts = daofactory.createAccount();

    const emailExisting = await accounts.readAccountByEmail(body.email);
    const usernameExisting = await accounts.readAccountByUsername(body.username);

    if (emailExisting) {
      throw new Error(`Error. ${body.email.toLowerCase()} already existing`);
    }

    if(usernameExisting) {
      throw new Error(`Error. ${body.username.toLowerCase()} already existing`);
    }

    const hash = await bcrypt.hash(body.password, 10);

    const newUser: Account = {
      email: body.email.toLowerCase(),
      username: body.username.toLowerCase(),
      password: hash,
      accountType: "registered",
      isAdmin: false,
    };

    return accounts.createAccount(newUser);
  }

  public static async renew(body: IRenewHeaders) {
    let accounts = daofactory.createAccount();
    let refreshToken = body.refreshToken;
    try {
      const payload: JwtPayload = <JwtPayload>jwt.decode(refreshToken);
      let account = await accounts.readAccountById(payload.id);

      if (!account) {
        throw new Error("Compte inexistant !");
      }

      jwt.verify(refreshToken, REFRESH_SECRET+account.password);

      const newToken = this.generateToken(account);
      const newRefreshToken = this.generateRefreshToken(account);
      return { token: newToken, refreshToken: newRefreshToken };

    } catch (error) {
      throw new Error("Token invalide ou expiré !");
    }
  }

  public static getAccount(body: IGetAccountBody) {}

  public static updateAccount(body) {}

  public static deleteAccount(body) {}

  public static generateToken(account: Account) {
    return jwt.sign(
      {
        id: account.id,
        username: account.username,
        email: account.email,
        isAdmin: account.isAdmin,
      },
      SECRET+account.password,
      { expiresIn: "2h" }
    );
  }

  public static generateRefreshToken(account: Account) {
    return jwt.sign(
      {
        id: account.id,
      },
      REFRESH_SECRET+account.password,
      { expiresIn: "1y" }
    );
  }
}
