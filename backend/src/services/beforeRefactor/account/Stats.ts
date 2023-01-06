class Stats {
  private _win: number;
  private _lose: number;
  private _played: number;
  private _moneyStolen: number;
  private _jailedBosses: number;
  private _gangsterKilled: number;

  public get win(): number {
    return this._win;
  }
  public set win(value: number) {
    this._win = value;
  }

  public get lose(): number {
    return this._lose;
  }
  public set lose(value: number) {
    this._lose = value;
  }

  public get played(): number {
    return this._played;
  }
  public set played(value: number) {
    this._played = value;
  }

  public get moneyStolen(): number {
    return this._moneyStolen;
  }
  public set moneyStolen(value: number) {
    this._moneyStolen = value;
  }

  public get jailedBosses(): number {
    return this._jailedBosses;
  }
  public set jailedBosses(value: number) {
    this._jailedBosses = value;
  }

  public get gangsterKilled(): number {
    return this._gangsterKilled;
  }
  public set gangsterKilled(value: number) {
    this._gangsterKilled = value;
  }
}