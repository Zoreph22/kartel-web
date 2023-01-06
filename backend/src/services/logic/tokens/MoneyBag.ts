import { Gang } from "./Gang";
import { ETokenType } from "./Token";

export class MoneyBag extends Gang {

  public getReward(): number {
    return 3;
  }
  public getType(): ETokenType {
    return ETokenType.MoneyBag;
  }
}