import { Boss } from "./Boss";
import { Detective } from "./Detective";
import { Gangster } from "./Gangster";
import { Token } from "./Token";
import { MoneyBag } from "./MoneyBag";

export class Board {
  //Attributs de la classe Board
  private board: Token[] = [];
  private _detective: Detective = new Detective();
  private lstngang: string[] = ["Rouge", "Bleu", "Vert", "Jaune", "Magenta", "Orange", "Gris"];
  private lstpgang: string[] = ["boss", "solo", "duo", "duo", "trio", "pdv"];

  //Méthodes get et set des attributs
  public getElemBoard(i: number): Token {
    return this.board[i];
  }
  public setElemBoard(i: number, valeur: Token): void {
    this.board[i] = valeur;
  }
  public PlatLength(): number {
    return this.board.length;
  }

  public get detective(): Detective {
    return this._detective;
  }
  public set detective(value: Detective) {
    this._detective = value;
  }

  public deleteCase(pos: number): void {
    this.board[pos] = null;
  }

  //Méthode qui génère un nombre aléatoire
  private randnum(): number {
    let i = <number>(Math.round(Math.random() * 42 + 1));
    // console.log(i);
    return i;
  }

  //Méthode pour remplir le board avec les token de façon aléatoire
  public initBoard(): void {
    let i: number = 0;
    this.board[i] = this.detective;

    this.lstngang.forEach((ngang: string) => {
      this.lstpgang.forEach((pgang: string) => {
        let i: number = this.randnum();
        while (this.board[i] != null) {
          i = this.randnum();
        }
        if (pgang === "boss") {
          this.board[i] = new Boss(ngang);
        }
        if (pgang === "solo") {
          this.board[i] = new Gangster(ngang, 1);
        }
        if (pgang === "duo") {
          this.board[i] = new Gangster(ngang, 2);
        }
        if (pgang === "trio") {
          this.board[i] = new Gangster(ngang, 3);
        }
        if (pgang === "pdv") {
          this.board[i] = new MoneyBag(ngang);
        }
      });
    });
  }

  //Méthode toString
  public toString(): string {
    let mes: string = "";
    for (let i = 0; i <= 42; i++) {
      if (this.board[i] != null) mes += this.board[i].getId() + " - ";
    }
    return mes;
  }

  //Méthode qui permet de remettre le tableau en ordre lorsque le detective est arrivé au bout
  public restartPlat(): void {
    let tempPlatSize = this.tailleExact;
    let tempPlat: Token[] = []; //tailleExact()
    let pos: number = this.detective.CurrentPos(this);
    let nb: number = 0;
    for (let i = pos; i < this.board.length; i++) {
      tempPlat[nb] = this.board[i];
      nb++;
    }
    for (let j = 0; j < pos; j++) {
      if (this.board[j] != null) {
        tempPlat[nb] = this.board[j];
        nb++;
      }
    }
    this.board = tempPlat;
  }

  //Méthode qui permet d'obtenir la taille du tableau
  public tailleExact(): number {
    let taille: number = 0;
    this.board.forEach((token: Token) => {
      if (token != null) {
        taille += 1;
      }
    });
    return taille;
  }
}
