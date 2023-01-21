import { Application, NextFunction, Request, Response } from "express";
import { Api } from "../Api";

export class SavedGamesApi extends Api{
  constructor() {
    super()
  }

  public init() {
    this.app.get("/getSavedGameById", this.getSavedGameById);
    this.app.get("/getSavedGames", this.getSavedGames);
  }

  public getSavedGameById(req: Request, res: Response) {}
  public getSavedGames(req: Request, res: Response) {}

}
