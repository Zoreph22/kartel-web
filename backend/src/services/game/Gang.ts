import { Jeton } from "./Jeton";
import { Prison } from "./Prison";

export abstract class Gang extends Jeton {
  //Attributs gang transmis par héritages dans les class Boss, Gangster, PotDeVin
  private _gang: string;

  constructor(gang: string) {
    super();
    this.gang = gang;
  }

  public get gang(): string {
    return this._gang;
  }
  public set gang(value: string) {
    this._gang = value;
  }

  public abstract calculValeur(prison: Prison): number;
}
