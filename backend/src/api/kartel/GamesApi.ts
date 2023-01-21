import { Application, NextFunction, Request, Response } from "express";
import { Api } from "../Api";

export class GamesApi extends Api {
  constructor() {
    super()
  }

  public init() {
    this.app.post("/rollDice", this.rollDice);
    this.app.post("/play", this.play);
  }

  public rollDice(req: Request, res: Response) {}
  public play(req: Request, res: Response) {}
}
