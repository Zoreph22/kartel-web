
import { Gang } from "./Gang";
import { ETokenColor, ETokenType } from "./Token";

export class Gangster extends Gang {
  //Attributs teamsize qui permet de connaître la valeur d'un gangster suivent si il est solo, duo ou trio
  private _size: number;

  //Méthodes get et set de el'attributs teamsize
  public get size(): number {
    return this._size;
  }
  public set size(value: number) {
    this._size = value;
  }

  //Constrcuteur de la classe Boss qui hérite de la classe Token
  constructor(color: ETokenColor, size: number) {
    super(color);
    this.size = size;
  }

  public getType(): ETokenType {
    return ETokenType.Gangster;
  }

  public getReward(): number {
    return this._size;
  }
}
