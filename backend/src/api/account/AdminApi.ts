import { Application, NextFunction, Request, Response } from "express";
import { Api } from "../Api";

export class AdminApi extends Api{
  constructor() {
    super()
  }

  public init() {
    this.app.post("admin/createAccount", this.createAccount);

    this.app.get("admin/getAccount", this.getAccount);
    this.app.get("admin/getAllAccounts", this.getAllAccounts);

    this.app.post("admin/updateAccount", this.updateAccount);

    this.app.delete("admin/deleteAccount", this.deleteAccount);
    this.app.delete("admin/deleteAllAccounts", this.deleteAllAccounts);
  }

  /* ------------------------------- Admin Account DB Request ------------------------------- */

  public createAccount(req: Request, res: Response) {}

  public getAccount(req: Request, res: Response) {}
  public getAllAccounts(req: Request, res: Response) {}

  public updateAccount(req: Request, res: Response) {}

  public deleteAccount(req: Request, res: Response) {}
  public deleteAllAccounts(req: Request, res: Response) {}

  /* ------------------------------- Admin SavedGames DB Request ------------------------------- */

  /* ------------------------------- Admin Stats DB Request ------------------------------- */
}
