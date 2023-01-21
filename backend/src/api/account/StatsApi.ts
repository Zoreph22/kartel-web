import { Application, NextFunction, Request, Response } from "express";
import { Api } from "../Api";

export default class StatsApi extends Api {
  constructor() {
    super()
  }

  public init() {
    this.app.get("/getStats", this.getStats);
  }

  public getStats(req: Request, res: Response) {}
}
