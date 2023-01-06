import { Boss } from "../tokens/Boss";
import { Detective } from "../tokens/Detective";
import { Gangster } from "../tokens/Gangster";
import { MoneyBag } from "../tokens/MoneyBag";
import { ETokenColor, Token } from "../tokens/Token";

export class Board {
  //Attributs de la classe Board
  private board: Token[] = [];
  private _detective: Detective = new Detective();
  private lstpgang: string[] = ["boss", "solo", "duo", "duo", "trio", "moneybag"];
  private boardInitSize: number = 42;

  //Méthodes get et set des attributs
  public getToken(i: number): Token {
    return this.board[i];
  }

  public setToken(i: number, token: Token): void {
    this.board[i] = token;
  }

  public getBoardLength(): number {
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
    return Math.round(Math.random() * this.boardInitSize + 1);
  }

  //Méthode pour remplir le board avec les token de façon aléatoire
  public initBoard(): void {
    let i: number = 0;
    this.board[i] = this.detective;

    for (const color in ETokenColor) {
      let colorValue = ETokenColor[color];
      this.lstpgang.forEach((pgang: string) => {
        let i: number = this.randnum();
        while (!this.board[i]) {
          i = this.randnum();
        }
        if (pgang === "boss") {
          this.board[i] = new Boss(colorValue);
        }
        if (pgang === "solo") {
          this.board[i] = new Gangster(colorValue, 1);
        }
        if (pgang === "duo") {
          this.board[i] = new Gangster(colorValue, 2);
        }
        if (pgang === "trio") {
          this.board[i] = new Gangster(colorValue, 3);
        }
        if (pgang === "moneybag") {
          this.board[i] = new MoneyBag(colorValue);
        }
      });
    }
  }

  //Remet le detective à l'emplacement 0 du tableau et déplace les autres token gang vers la fin du tableau.
  public manageBoard(): void {
    let tete = this.board.splice(1,this._detective.position);
    let queue = this.board.splice(this._detective.position+1);
    this.board = [this._detective, ...queue, ...tete];
    this._detective.position = 0;
  }
}
