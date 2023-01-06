import { Gang } from "./Gang";
import { ETokenType } from "./Token";

export class Boss extends Gang {

  public getReward(): number {
    return 0;
  }
  public getType(): ETokenType {
    return ETokenType.Boss;
  }
}