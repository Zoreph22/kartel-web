import { Gang } from "./Gang";
import { Prison } from "./Prison";

export class Boss extends Gang {
  constructor(gang: string) {
    super(gang);
  }

  public calculValeur(prison: Prison): number {
    return 0;
  }

  public getId(): string {
    let btmp: Boss = <Boss>this;
    let l: string = btmp.gang.substring(0, 1);
    return "[" + l + "]";
  }
}
