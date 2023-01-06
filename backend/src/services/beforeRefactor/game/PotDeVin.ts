import { Gang } from "./Gang";
import { Jail } from "./Jail";

export class MoneyBag extends Gang {
  //Constrcuteur de la classe Boss qui hérite de la classe Token
  constructor(gang: string) {
    super(gang);
  }

  public calculValeur(jail: Jail): number {
    let valeur: number = 0;
    if (!jail.gbossInJail(this)) {
      valeur = 3;
    }
    return valeur;
  }

  public getId(): string {
    let pdvtmp: MoneyBag = <MoneyBag>this;
    let l: string = pdvtmp.gang.substring(0, 1);
    return "$" + l;
  }
}
