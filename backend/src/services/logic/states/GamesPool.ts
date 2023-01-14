import { Game } from "../Game";
import { Lobby } from "../Lobby";

export class GamesPool {
  private _games: Game[] = [];

  public get games() {
    return this._games;
  }

  public createGame(lobby: Lobby) {
    this._games.push(new Game(lobby.players, lobby.lobbyId));
  }

  public getGameById(socketId: string) {
    this._games.forEach((element: Game) => {
      if (element.gameId === socketId) {
        return element;
      }
    });
  }

  public deleteGame(socketId: string) {
    let lobby: Game;
    this._games.forEach((element: Game) => {
      if (element.gameId === socketId) {
        return element;
      }
    });
    let index = this._games.indexOf(lobby);
    if (index > -1) {
      this._games.splice(index, 1);
    }
  }
}
