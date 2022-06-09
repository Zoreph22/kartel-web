import { Boss } from "./Boss";
import { Gang } from "./Gang";
import { Jeton } from "./Jeton";

export class Prison {
  //Attribut de la classe Prison
  private prison: Boss[] = [];

  //Méthode qui permet de réinitialiser la classe prison
  public initPrison(): void {
    this.prison[0] = null;
    this.prison[1] = null;
    this.prison[2] = null;
    this.prison[3] = null;
    this.prison[4] = null;
  }

  //Méthodes get et set de l'attribut prison
  public setPrison(x: Boss, j: number): void {
    this.prison[j] = x;
  }
  public getPrison(j: number): Jeton {
    return this.prison[j];
  }

  //Méthode pour l'ajoute d'un boss dans la prison
  public ajoutboss(bossajout: Boss): void {
    for (let i = 0; i <= 4; i++) {
      if (this.prison[i] == undefined) {
        this.setPrison(bossajout, i);
        i = 4;
      }
    }
  }

  //Méthode pour vérifier si un élément de type jeton est du même type qu'un boss qui se trouve dans la prison
  public gbossInPrison(element: Gang): boolean {
    let bool: boolean = false;
    this.prison.forEach((boss: Boss) => {
      if (boss != null) {
        if (boss.gang === element.gang) {
          bool = true;
        }
      }
    });
    return bool;
  }

  //Méthode pour savoir si la prison est pleine
  public prisonPleine(): boolean {
    let bool: boolean = false;
    if(this.prison.length >= 5) bool = true;
    return bool;
  }

  //Méthode toString
  public toString(): string {
    let mes: string = "Prison : ";
    for (let i = 0; i <= 4; i++) {
      if (this.prison[i] != null) mes += this.prison[i].getId() + " - ";
    }
    return mes;
  }
}
