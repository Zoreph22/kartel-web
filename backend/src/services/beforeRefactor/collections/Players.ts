import { Player } from "../game/Player";
import { Reserve } from "../game/Reserve";

export class Players {
  private _players: Player[] = [];

  /* -------------------------------- Get & Set ------------------------------- */

  public get players(): Player[] {
    return this._players;
  }

  public set players(value: Player[]) {
    this._players = value;
  }

  /* --------------------------------- Methods -------------------------------- */

  public createPlayer(name: string, playerId: string){
    this.players.push(new Player(name, playerId, new Reserve()));
  }

  public removePlayer(player: Player){
    let index = this.players.indexOf(player);
    if(index > -1) {
      this.players.splice(index, 1);
    }
  }

  public find(playerId): any {
    let ret;
    this.players.forEach((player) => {
      if(player.playerId === playerId)
        ret = player;
    })
    return ret;
  }
}

export const players = new Players();