import { Board } from "../game/Board";
import { Player } from "../game/Player";
import { Jail } from "../game/Jail";

class GameStats {
  private _players: Player[] = [];
  private _jail: Jail = new Jail();
  private _board: Board = new Board();
  private _gameId: string;
}