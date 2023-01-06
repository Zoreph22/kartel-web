import { Boss } from "../tokens/Boss";
import { Gang } from "../tokens/Gang";
import { Token } from "../tokens/Token";

export class Jail {
  //Attribut de la classe Jail
  private _jail: Boss[] = [];

  public get jail(): Boss[] {
    return this._jail;
  }

  //Méthodes get et set de l'attribut jail
  public getBoss(j: number): Boss {
    return this.jail[j];
  }

  //Méthode pour l'ajoute d'un boss dans la jail
  public addBoss(boss: Boss): void {
    if (!this.isJailFull()) {
      this.jail.push(boss);
    }
  }

  //Méthode pour vérifier si un élément de type token est du même type qu'un boss qui se trouve dans la jail
  public isBossInJail(element: Gang): boolean {
    for (const boss of this._jail) {
      if (boss.color === element.color) {
        return true;
      }
    }
    return false;
  }

  //Méthode pour savoir si la jail est pleine
  public isJailFull(): boolean {
    if (this.jail.length >= 5) {
      return true;
    } else {
      return false;
    }
  }
}
