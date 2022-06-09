import { Gang } from "./Gang";
import { Prison } from "./Prison";

export class PotDeVin extends Gang {
  //Constrcuteur de la classe Boss qui hérite de la classe Jeton
  constructor(gang: string) {
    super(gang);
  }

  public calculValeur(prison: Prison): number {
    let valeur: number = 0;
    if (!prison.gbossInPrison(this)) {
      valeur = 3;
    }
    return valeur;
  }

  public getId(): string {
    let pdvtmp: PotDeVin = <PotDeVin>this;
    let l: string = pdvtmp.gang.substring(0, 1);
    return "$" + l;
  }
}
