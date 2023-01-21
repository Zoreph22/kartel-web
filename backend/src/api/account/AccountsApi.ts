import { Application, NextFunction, Request, Response } from "express";
import AccountService from "../../services/accounts/AccountService";
import { getErrorMessage } from "../../utils";
import { Api } from "../Api";
import { hasPerm } from "../middleswares/PermsMiddleware";
import Validators from "../middleswares/Validators";
import { IGetAccountBody, ILoginBody, IRegisterBody } from "./IAccountsBody";

export class AccountsApi extends Api {
  constructor() {
    super();
  }

  public init() {
    this.app.post("/login", hasPerm("guest"), this.login);
    this.app.post("/register", hasPerm("guest"), Validators.userSignup, this.register);
    this.app.post("/renew", this.renew);

    this.app.get("/getAccount", hasPerm("user"), this.getAccount);
    this.app.post("/updateAccount", hasPerm("user"), this.updateAccount);
    this.app.delete("/deleteAccount", hasPerm("user"), this.deleteAccount);
  }

  /* ------------------------------- Basic Usage ------------------------------ */

  public async login(req: Request<{}, {}, ILoginBody>, res: Response) {
    const userData = req.body;

    try {
      const tokens = await AccountService.login(userData);
      res.json({ access_token: tokens.token, refresh_access_token: tokens.refreshToken });
    } catch (e) {
      res.status(400).json({ message: getErrorMessage(e) });
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

  public getAccount(req: Request<{}, {}, IGetAccountBody>, res: Response) {
    console.log("here");
  }
  public updateAccount(req: Request, res: Response) {}
  public deleteAccount(req: Request, res: Response) {}
}
