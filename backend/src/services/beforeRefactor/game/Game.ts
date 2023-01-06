import { Boss } from "./Boss";
import { Dice } from "./Dice";
import { Gang } from "./Gang";
import { Player } from "./Player";
import { Board } from "./Board";
import { Jail } from "./Jail";

export class Game {
  private _players: Player[] = [];
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

  public updateTurn() {
    if (!this.jail.jailPleine()) {
      this.playerTurnId + 1 <= this._players.length - 1
        ? this.playerTurnId++
        : (this.playerTurnId = 0);
        return false;
    } else {
      this.playerTurnId = -1;
      this.finalState();
      return true;
    }
  }

  public play(shift): boolean {
    this.recuptoken(shift, this.players[this._playerTurnId], this.diceRollResult);
    return this.updateTurn() ? true : false;
  }

  public diceRoll() {
    this.diceRollResult = this.de.lancerDe();
  }

  public finalState() {
    this.affEtatPartie();
    console.log("La partie du Jeu Kartel est fini !");
    let gagnant: Player = this.findBestPlayer();
    console.log(
      "Le gagnant de la partie est le Player " +
        gagnant.name +
        " avec un score de : " +
        gagnant.storage.calcScore(this.jail)
    );
  }

  //Méthode qui permet de récupérer les token, de déplacer le detective et de restart le board
  public recuptoken(playcase: number, Player: Player, facede: number): void {
    let currentpos: number = this.board.detective.CurrentPos(this.board);
    let nextpos: number = currentpos + playcase;
    if (currentpos + facede >= this.board.PlatLength()) {
      this.board.restartPlat();
      currentpos = 0;
      nextpos = currentpos + playcase;
    }
    if (this.board.getElemBoard(nextpos) instanceof Boss) {
      let b: Boss = <Boss>this.board.getElemBoard(nextpos);
      this.jail.ajoutboss(b);
    } else {
      let g: Gang = <Gang>this.board.getElemBoard(nextpos);
      Player.storage.placeInReserve(g);
    }
    this.board.detective.deplacement(currentpos, playcase);
    this.board.setElemBoard(nextpos, this.board.detective);
    this.board.deleteCase(currentpos);
  }

  public findBestPlayer(): Player {
    let max: number = 0,
      i: number = 0;
    for (let j = 0; i < this.players.length - 1; j++) {
      if (this.players[j].storage.calcScore(this.jail) > max) {
        max = this.players[j].storage.calcScore(this.jail);
        i = j;
      }
    }
    return this.players[i];
  }

  //Méthode qui affiche l'état de la partie avec le tableau, la jail et les Players
  public affEtatPartie(): void {
    console.log("***********************************************");
    console.log();
    console.log(this.board.toString());
    console.log();
    console.log(this.jail.toString());
    console.log();
    for (let i = 0; i <= this.players.length - 1; i++) {
      let aff: string = this.players[i].toString(this.jail);
      console.log(aff);
    }
    console.log();
  }
}
