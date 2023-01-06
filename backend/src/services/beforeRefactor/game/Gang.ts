import { Token } from "./Token";
import { Jail } from "./Jail";

export abstract class Gang extends Token {
  //Attributs gang transmis par héritages dans les class Boss, Gangster, MoneyBag
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

  public abstract calculValeur(jail: Jail): number;
}
