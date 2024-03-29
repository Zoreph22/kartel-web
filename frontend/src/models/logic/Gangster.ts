import { Gang } from "./Gang";
import { Prison } from "./Prison";

export class Gangster extends Gang {
  //Attributs teamsize qui permet de connaître la valeur d'un gangster suivent si il est solo, duo ou trio
  private _teamsize: number;

  //Méthodes get et set de el'attributs teamsize
  public get teamsize(): number {
    return this._teamsize;
  }
  public set teamsize(value: number) {
    this._teamsize = value;
  }

  //Constrcuteur de la classe Boss qui hérite de la classe Jeton
  constructor(gang: string, size: number) {
    super(gang);
    this.teamsize = size;
  }

  public calculValeur(prison: Prison): number {
    let valeur: number = 0;
    if (prison.gbossInPrison(this)) {
      valeur = this.teamsize;
    } else {
      valeur = -this.teamsize;
    }
    return valeur;
  }

  public getId(): string {
    let tmp: Gangster = <Gangster>this;
    return tmp.teamsize + tmp.gang.substring(0, 1);
  }
}
