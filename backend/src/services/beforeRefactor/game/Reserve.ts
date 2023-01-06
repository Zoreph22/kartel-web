import { Gang } from "./Gang";
import { Jail } from "./Jail";

export class Reserve {
  //Attributs de la classe storage
  private storage: Gang[] = []; //40

  //Méthodes get et set de l'attribut storage
  public getReserve(i: number): Gang {
    return this.storage[i];
  }
  public setReserve(i: number, token: Gang): void {
    this.storage[i] = token;
  }

  //Méthodes qui permet d'ajouter un élément dans le tableau sur une case vide
  public placeInReserve(elem: Gang): void {
    for (let i = 0; i < 39; i++) {
      if (this.storage[i] == undefined) {
        this.setReserve(i, elem);
        i = 39;
      }
    }
  }

  //Méthode qui permet de calculer le score d'un player en fonction de ces tokens
  public calcScore(jail: Jail): number {
    let score: number = 0;
    for (let i = 0; i < 39; i++) {
      if (this.storage[i] != null) {
        score += this.storage[i].calculValeur(jail);
      }
    }
    return score;
  }

  //Méthode toString
  public toString(): string {
    let mes: string = "";
    for (let i = 0; i <= 39; i++) {
      if (this.storage[i] != null) mes += this.storage[i].getId() + " - ";
    }
    return mes;
  }
}
