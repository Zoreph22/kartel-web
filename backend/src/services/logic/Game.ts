import { Board } from "./boards/Board";
import { Jail } from "./boards/Jail";
import { Player } from "./Player";
import { Boss } from "./tokens/Boss";
import { Gang } from "./tokens/Gang";
import { Gangster } from "./tokens/Gangster";
import { MoneyBag } from "./tokens/MoneyBag";
import { ETokenType } from "./tokens/Token";
import { Dice } from "./utils/Dice";

export class Game {
  private _players: Player[];
  private de: Dice = new Dice();
  private _jail: Jail = new Jail();
  private _board: Board = new Board();
  private _gameId: string;
  private _playerTurnId: number = 0;
  private _diceRollResult: number;

  constructor(players: Player[], lobbyId: string) {
    this.players = players;
    this.gameId = lobbyId;
    this.initGame();
  }

  /* -------------------------------- Get & Set ------------------------------- */

  public get players(): Player[] {
    return this._players;
  }
  public set players(value: Player[]) {
    this._players = value;
  }

  public get playerTurnId(): number {
    return this._playerTurnId;
  }
  public set playerTurnId(value: number) {
    this._playerTurnId = value;
  }

  public get gameId(): string {
    return this._gameId;
  }
  public set gameId(value: string) {
    this._gameId = value;
  }

  public get diceRollResult(): number {
    return this._diceRollResult;
  }
  public set diceRollResult(value: number) {
    this._diceRollResult = value;
  }

  public get board(): Board {
    return this._board;
  }
  public set board(value: Board) {
    this._board = value;
  }

  public get jail(): Jail {
    return this._jail;
  }
  public set jail(value: Jail) {
    this._jail = value;
  }

  /* --------------------------------- Methods -------------------------------- */

  public initGame() {
    this.board.initBoard();
  }

  public updateScore(player: Player) {
    player.score = 0;
    player.storage.array.forEach((element) => {
      if(this._jail.isBossInJail(element)){
        if(element.getType() === ETokenType.Gangster){
          player.score += element.getReward();
        }
      } else {
        if(element.getType() === ETokenType.MoneyBag){
          player.score += element.getReward();
        }
      }
    });
  }

  public updateTurn() {
    if (!this.jail.isJailFull()) {
      this.playerTurnId + 1 <= this._players.length - 1
        ? this.playerTurnId++
        : (this.playerTurnId = 0);
      return true;
    } else {
      this.playerTurnId = -1;
      return false;
    }
  }

  public play(shift): boolean {
    this.takeToken(shift, this.players[this._playerTurnId]);
    return this.updateTurn();
  }

  public diceRoll(): number {
    this.diceRollResult = this.de.rollDice();
    return this._diceRollResult;
  }

  //Méthode qui permet de récupérer les token, de déplacer le detective et de restart le board
  public takeToken(shift: number, player: Player): void {
    let token = this._board.getToken(shift);
    if(token instanceof Gangster || token instanceof MoneyBag) {
      player.storage.addElement(<Gang> this._board.getToken(shift));
      this._board.manageBoard(shift);
    }
    else if (token instanceof Boss){
      this._jail.addBoss(token);
      this._board.manageBoard(shift);
    }
    this.updateScore(player);
  }
}
