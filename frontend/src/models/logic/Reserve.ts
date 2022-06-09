import { Gang } from "./Gang";
import { Prison } from "./Prison";

export class Reserve {
  //Attributs de la classe reserve
  private reserve: Gang[] = []; //40

  //Méthodes get et set de l'attribut reserve
  public getReserve(i: number): Gang {
    return this.reserve[i];
  }
  public setReserve(i: number, jeton: Gang): void {
    this.reserve[i] = jeton;
  }

  //Méthodes qui permet d'ajouter un élément dans le tableau sur une case vide
  public placeInReserve(elem: Gang): void {
    for (let i = 0; i < 39; i++) {
      if (this.reserve[i] == undefined) {
        this.setReserve(i, elem);
        i = 39;
      }
    }
  }

  //Méthode qui permet de calculer le score d'un joueur en fonction de ces jetons
  public calcScore(prison: Prison): number {
    let score: number = 0;
    for (let i = 0; i < 39; i++) {
      if (this.reserve[i] != null) {
        score += this.reserve[i].calculValeur(prison);
      }
    }
    return score;
  }

  //Méthode toString
  public toString(): string {
    let mes: string = "";
    for (let i = 0; i <= 39; i++) {
      if (this.reserve[i] != null) mes += this.reserve[i].getId() + " - ";
    }
    return mes;
  }
}
