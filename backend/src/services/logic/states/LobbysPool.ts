import { Lobby } from "../Lobby";

export class LobbyPool {
  private _lobbys: Lobby[] = [];

  public get lobbys() {
    return this._lobbys;
  }

  public createLobby(username: string, socketId: string, accountId?: string) {
    this._lobbys.push(new Lobby(username, socketId, accountId));
  }

  public getLobbyById(socketId: string) {
    this._lobbys.forEach((element: Lobby) => {
      if (element.lobbyId === socketId) {
        return element;
      }
    });
  }

  public deleteLobby(socketId: string) {
    let lobby: Lobby;
    this._lobbys.forEach((element: Lobby) => {
      if (element.lobbyId === socketId) {
        return element;
      }
    });
    let index = this._lobbys.indexOf(lobby);
    if (index > -1) {
      this._lobbys.splice(index, 1);
    }
  }
}
