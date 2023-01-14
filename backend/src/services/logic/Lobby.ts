import { Player } from "./Player";

export class Lobby {
  private _players: Player[] = [];
  private _lobbyId: string;

  constructor(username: string, socketId: string, accountId?: string) {
    this._players[0] = new Player(username, socketId, accountId);
    this.lobbyId = socketId;
  }

  /* -------------------------------- Get & Set ------------------------------- */

  public get players() {
    return this._players;
  }

  public get lobbyId(): string {
    return this._lobbyId;
  }

  public set lobbyId(value: string) {
    this._lobbyId = value;
  }

  /* -------------------------------- Méthods -------------------------------- */

  public addPlayer(username: string, socketId: string, accountId?: string) {
    this._players.push(new Player(username, socketId, accountId));
  }

  public removePlayer(socketId: string) {
    let player: Player;
    this._players.forEach((element: Player) => {
      if (element.socketId === socketId) {
        player = element;
      }
    });
    let index = this._players.indexOf(player);
    if (index > -1) {
      this._players.splice(index, 1);
    }
  }
}
