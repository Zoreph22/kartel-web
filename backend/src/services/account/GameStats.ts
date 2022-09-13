import { Plateau } from "../game/Plateau";
import { Player } from "../game/Player";
import { Prison } from "../game/Prison";

class GameStats {
  private _players: Player[] = [];
  private _prison: Prison = new Prison();
  private _plateau: Plateau = new Plateau();
  private _gameId: string;
}