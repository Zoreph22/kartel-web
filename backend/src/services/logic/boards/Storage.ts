import { Gang } from "../tokens/Gang";

export class Storage {
  //Attributs de la classe storage
  private _storage: Gang[] = [];

  public get storage(): Gang[] {
    return this._storage;
  }

  //Méthodes get et set de l'attribut storage
  public getGang(i: number): Gang {
    return this.storage[i];
  }

  //Méthodes qui permet d'ajouter un élément dans le tableau sur une case vide
  public addGang(gang: Gang): void {
    this._storage.push(gang);
  }

  //Méthode qui permet de calculer le score d'un player en fonction de ces tokens
  // public calcScore(jail: Jail): number {
  //   let score: number = 0;
  //   for (let i = 0; i < 39; i++) {
  //     if (this.storage[i] != null) {
  //       score += this.storage[i].calculValeur(jail);
  //     }
  //   }
  //   return score;
  // }
}
