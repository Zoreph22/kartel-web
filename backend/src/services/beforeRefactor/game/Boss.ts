import { Gang } from "./Gang";
import { Jail } from "./Jail";

export class Boss extends Gang {
  constructor(gang: string) {
    super(gang);
  }

  public calculValeur(jail: Jail): number {
    return 0;
  }

  public getId(): string {
    let btmp: Boss = <Boss>this;
    let l: string = btmp.gang.substring(0, 1);
    return "[" + l + "]";
  }
}
