import { Lobby } from "../game/Lobby";
import { players } from "./Players";

export class Lobbys {
  private _lobbys: Lobby[] = [];

  /* -------------------------------- Get & Set ------------------------------- */

  public get lobbys(): Lobby[] {
    return this._lobbys;
  }
  public set lobbys(value: Lobby[]) {
    this._lobbys = value;
  }

  /* --------------------------------- Methods -------------------------------- */

  public createLobby(player){
    this._lobbys.push(new Lobby(player));
  }

  public removeLobby(lobby){
    let index = this.lobbys.indexOf(lobby);
    if(index > -1) {
      this.lobbys.splice(index, 1);
    }
  }

  public find(lobbyId): any {
    let ret;
    this.lobbys.forEach((lobby: Lobby) => {
      if(lobby.lobbyId === lobbyId)
        ret = lobby;
    })
    return ret;
  }
}

export const lobbys = new Lobbys();
