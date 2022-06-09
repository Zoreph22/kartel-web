import { Boss } from "./Boss";
import { Detective } from "./Detective";
import { Gangster } from "./Gangster";
import { Jeton } from "./Jeton";
import { PotDeVin } from "./PotDeVin";

export class Plateau {
  //Attributs de la classe Plateau
  private plateau: Jeton[] = [];
  private _detective: Detective = new Detective();
  private lstngang: string[] = ["Rouge", "Bleu", "Vert", "Jaune", "Magenta", "Orange", "Gris"];
  private lstpgang: string[] = ["boss", "solo", "duo", "duo", "trio", "pdv"];

  //Méthodes get et set des attributs
  public getElemPlateau(i: number): Jeton {
    return this.plateau[i];
  }
  public setElemPlateau(i: number, valeur: Jeton): void {
    this.plateau[i] = valeur;
  }
  public PlatLength(): number {
    return this.plateau.length;
  }

  public get detective(): Detective {
    return this._detective;
  }
  public set detective(value: Detective) {
    this._detective = value;
  }

  public deleteCase(pos: number): void {
    this.plateau[pos] = null;
  }

  //Méthode qui génère un nombre aléatoire
  private randnum(): number {
    let i = <number>(Math.round(Math.random() * 42 + 1));
    console.log(i);
    return i;
  }

  //Méthode pour remplir le plateau avec les jeton de façon aléatoire
  public initPlateau(): void {
    let i: number = 0;
    this.plateau[i] = this.detective;

    this.lstngang.forEach((ngang: string) => {
      this.lstpgang.forEach((pgang: string) => {
        let i: number = this.randnum();
        while (this.plateau[i] != null) {
          i = this.randnum();
        }
        if (pgang === "boss") {
          this.plateau[i] = new Boss(ngang);
        }
        if (pgang === "solo") {
          this.plateau[i] = new Gangster(ngang, 1);
        }
        if (pgang === "duo") {
          this.plateau[i] = new Gangster(ngang, 2);
        }
        if (pgang === "trio") {
          this.plateau[i] = new Gangster(ngang, 3);
        }
        if (pgang === "pdv") {
          this.plateau[i] = new PotDeVin(ngang);
        }
      });
    });
  }

  //Méthode toString
  public toString(): string {
    let mes: string = "";
    for (let i = 0; i <= 42; i++) {
      if (this.plateau[i] != null) mes += this.plateau[i].getId() + " - ";
    }
    return mes;
  }

  //Méthode qui permet de remettre le tableau en ordre lorsque le detective est arrivé au bout
  public restartPlat(): void {
    let tempPlatSize = this.tailleExact;
    let tempPlat: Jeton[] = []; //tailleExact()
    let pos: number = this.detective.CurrentPos(this);
    let nb: number = 0;
    for (let i = pos; i < this.plateau.length; i++) {
      tempPlat[nb] = this.plateau[i];
      nb++;
    }
    for (let j = 0; j < pos; j++) {
      if (this.plateau[j] != null) {
        tempPlat[nb] = this.plateau[j];
        nb++;
      }
    }
    this.plateau = tempPlat;
  }

  //Méthode qui permet d'obtenir la taille du tableau
  public tailleExact(): number {
    let taille: number = 0;
    this.plateau.forEach((jeton: Jeton) => {
      if (jeton != null) {
        taille += 1;
      }
    });
    return taille;
  }
}
