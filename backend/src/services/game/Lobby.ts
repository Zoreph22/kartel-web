import { Game } from "./Game";
import { Player } from "./Player";

export class Lobby {
  private _players: Player[] = [];
  private _game: Game;
  private _lobbyId: string;

  constructor(player){
    this._players[0] = player;
    this.lobbyId = player.lobbyId;
  }

  /* -------------------------------- Get & Set ------------------------------- */

  public get players() {
    return this._players;
  }
  public set players(value) {
    this._players = value;
  }

  public get game(): Game {
    return this._game;
  }
  public set game(value: Game) {
    this._game = value;
  }

  public get lobbyId(): string {
    return this._lobbyId;
  }
  public set lobbyId(value: string) {
    this._lobbyId = value;
  }

  /* -------------------------------- Méthods -------------------------------- */

  public startGame(){
    this.game = new Game(this.players, this._lobbyId);
  }

  public join(player){
      this._players.push(player);
  }

  public quit(player){
    let index = this._players.indexOf(player);
    if(index > -1) {
      this._players.splice(index, 1);
    }
  }
}