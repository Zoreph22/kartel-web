import { celebrate, Joi } from "celebrate";
import { Application, NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import AccountService from "../../services/accounts/AccountService";
import { getErrorMessage } from "../../utils";
import { Api } from "../Api";
import { hasPerm } from "../middleswares/PermsMiddleware";
import Validators from "../middleswares/Validators";
import {
  IDeleteAccountBody,
  IGetAccountBody,
  ILoginBody,
  IRegisterBody,
  IUpdateAccountBody,
} from "./IAccountsBody";

export class AccountsApi extends Api {
  constructor() {
    super();
  }

  public init() {
    this.app.post("/login", hasPerm("guest"), this.login);
    this.app.post("/register", hasPerm("guest"), Validators.userSignup(), this.register);
    this.app.post("/renew", this.renew);

    this.app.get("/getAccount", hasPerm("user"), this.getAccount);
    this.app.post("/updateAccount", hasPerm("user"), Validators.userUpdateAccount(), this.updateAccount);
    this.app.delete("/deleteAccount", hasPerm("user"), this.deleteAccount);
  }

  /* ------------------------------- Basic Usage ------------------------------ */

  public async login(req: Request<{}, {}, ILoginBody>, res: Response) {
    const userData = req.body;

    try {
      const tokens = await AccountService.login(userData);
      res.json({ access_token: tokens.token, refresh_access_token: tokens.refreshToken });
    } catch (error) {
      res.status(400).json({ message: getErrorMessage(error) });
    }
  }

  public async register(req: Request<{}, {}, IRegisterBody>, res: Response) {
    const userData = req.body;

    try {
      const userId = await AccountService.register(userData);
      res.json({ message: `User ${userId} created` });
    } catch (e) {
      console.log("here");
      res.status(400).json({ message: getErrorMessage(e) });
    }
  }

  public async renew(req: Request, res: Response) {
    const userData = req.body;

    try {
      const tokens = await AccountService.renew(userData);
      res.json({ access_token: tokens.token, refresh_access_token: tokens.refreshToken });
    } catch (e) {
      res.status(400).json({ message: getErrorMessage(e) });
    }
  }

  /* ------------------------------- DB Request ------------------------------- */

  public async getAccount(req: Request<{}, {}, IGetAccountBody>, res: Response) {
    const token = req.headers.authorization.split(" ")[1];
    const payload: JwtPayload = <JwtPayload>jwt.decode(token);
    const userData: IGetAccountBody = { accountId: payload.id };

    try {
      const account = await AccountService.getAccount(userData);
      res.json({ account: account });
    } catch (error) {
      res.status(400).json({ message: getErrorMessage(error) });
    }
  }

  public async updateAccount(req: Request<{}, {}, IUpdateAccountBody>, res: Response) {
    const token = req.headers.authorization.split(" ")[1];
    const payload: JwtPayload = <JwtPayload>jwt.decode(token);
    const body = req.body;
    body.id = payload.id;

    try {
      const account = await AccountService.updateAccount(body);
      res.json("Account updated !");
    } catch (error) {
      res.status(400).json({ message: getErrorMessage(error) });
    }
  }

  public async deleteAccount(req: Request<{}, {}, IDeleteAccountBody>, res: Response) {
    const token = req.headers.authorization.split(" ")[1];
    const payload: JwtPayload = <JwtPayload>jwt.decode(token);
    const userData: IGetAccountBody = { accountId: payload.id };

    try {
      await AccountService.deleteAccount(userData);
      res.json("Account deleted !");
    } catch (error) {
      res.status(400).json({ message: getErrorMessage(error) });
    }
  }
}
