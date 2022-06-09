import { Boss } from "./Boss";
import { De } from "./De";
import { Gang } from "./Gang";
import { Player } from "./Player";
import { Plateau } from "./Plateau";
import { Prison } from "./Prison";

export class Game {
  private _players: Player[] = [];
  private de: De = new De();
  private _prison: Prison = new Prison();
  private _plateau: Plateau = new Plateau();
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

  public get plateau(): Plateau {
    return this._plateau;
  }
  public set plateau(value: Plateau) {
    this._plateau = value;
  }

  public get prison(): Prison {
    return this._prison;
  }
  public set prison(value: Prison) {
    this._prison = value;
  }

  /* --------------------------------- Methods -------------------------------- */

  public initGame() {
    this.plateau.initPlateau();
  }

  public updateTurn() {
    if (!this.prison.prisonPleine()) {
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
    this.recupjeton(shift, this.players[this._playerTurnId], this.diceRollResult);
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
        gagnant.reserve.calcScore(this.prison)
    );
  }

  //Méthode qui permet de récupérer les jeton, de déplacer le detective et de restart le plateau
  public recupjeton(playcase: number, Player: Player, facede: number): void {
    let currentpos: number = this.plateau.detective.CurrentPos(this.plateau);
    let nextpos: number = currentpos + playcase;
    if (currentpos + facede >= this.plateau.PlatLength()) {
      this.plateau.restartPlat();
      currentpos = 0;
      nextpos = currentpos + playcase;
    }
    if (this.plateau.getElemPlateau(nextpos) instanceof Boss) {
      let b: Boss = <Boss>this.plateau.getElemPlateau(nextpos);
      this.prison.ajoutboss(b);
    } else {
      let g: Gang = <Gang>this.plateau.getElemPlateau(nextpos);
      Player.reserve.placeInReserve(g);
    }
    this.plateau.detective.deplacement(currentpos, playcase);
    this.plateau.setElemPlateau(nextpos, this.plateau.detective);
    this.plateau.deleteCase(currentpos);
  }

  public findBestPlayer(): Player {
    let max: number = 0,
      i: number = 0;
    for (let j = 0; i < this.players.length - 1; j++) {
      if (this.players[j].reserve.calcScore(this.prison) > max) {
        max = this.players[j].reserve.calcScore(this.prison);
        i = j;
      }
    }
    return this.players[i];
  }

  //Méthode qui affiche l'état de la partie avec le tableau, la prison et les Players
  public affEtatPartie(): void {
    console.log("***********************************************");
    console.log();
    console.log(this.plateau.toString());
    console.log();
    console.log(this.prison.toString());
    console.log();
    for (let i = 0; i <= this.players.length - 1; i++) {
      let aff: string = this.players[i].toString(this.prison);
      console.log(aff);
    }
    console.log();
  }
}
