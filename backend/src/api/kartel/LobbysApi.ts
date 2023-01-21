import { Application, NextFunction, Request, Response } from "express";
import { Api } from "../Api";

export class LobbysApi extends Api{
  constructor() {
    super()
  }

  public init() {
    this.app.post("/createLobby", this.createLobby);
    this.app.post("/joinLobby", this.joinLobby);
    this.app.post("/quitLobby", this.quitLobby);
    this.app.post("/startGame", this.startGame);
  }

  public createLobby(req: Request, res: Response) {}
  public joinLobby(req: Request, res: Response) {}
  public quitLobby(req: Request, res: Response) {}
  public startGame(req: Request, res: Response) {}
  // Permettre de donner le rôle de chef du lobby a un autre joueur
}
