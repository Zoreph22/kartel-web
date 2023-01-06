import { Boss } from "./Boss";
import { Gang } from "./Gang";
import { Token } from "./Token";

export class Jail {
  //Attribut de la classe Jail
  private jail: Boss[] = [];

  //Méthode qui permet de réinitialiser la classe jail
  public initJail(): void {
    this.jail[0] = null;
    this.jail[1] = null;
    this.jail[2] = null;
    this.jail[3] = null;
    this.jail[4] = null;
  }

  //Méthodes get et set de l'attribut jail
  public setJail(x: Boss, j: number): void {
    this.jail[j] = x;
  }
  public getJail(j: number): Token {
    return this.jail[j];
  }

  //Méthode pour l'ajoute d'un boss dans la jail
  public ajoutboss(bossajout: Boss): void {
    for (let i = 0; i <= 4; i++) {
      if (this.jail[i] == undefined) {
        this.setJail(bossajout, i);
        i = 4;
      }
    }
  }

  //Méthode pour vérifier si un élément de type token est du même type qu'un boss qui se trouve dans la jail
  public gbossInJail(element: Gang): boolean {
    let bool: boolean = false;
    this.jail.forEach((boss: Boss) => {
      if (boss != null) {
        if (boss.gang === element.gang) {
          bool = true;
        }
      }
    });
    return bool;
  }

  //Méthode pour savoir si la jail est pleine
  public jailPleine(): boolean {
    let bool: boolean = false;
    if(this.jail.length >= 5) bool = true;
    return bool;
  }

  //Méthode toString
  public toString(): string {
    let mes: string = "Jail : ";
    for (let i = 0; i <= 4; i++) {
      if (this.jail[i] != null) mes += this.jail[i].getId() + " - ";
    }
    return mes;
  }
}
