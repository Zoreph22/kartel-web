
import { ETokenColor, Token } from "./Token";

export abstract class Gang extends Token {
  private _color: ETokenColor;

  constructor(color: ETokenColor) {
    super();
    this.color = color;
  }

  public get color(): ETokenColor {
    return this._color;
  }
  public set color(value: ETokenColor) {
    this._color = value;
  }

  public abstract getReward(): number;
}
