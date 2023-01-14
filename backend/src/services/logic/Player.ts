import { Storage } from "./boards/Storage";
import { Gang } from "./tokens/Gang";

export class Player {
  //Attributs de la classe player
  private _accountId: string;
  private _socketId: string;
  private _username: string;
  private _score: number;
  private _storage: Storage;

  constructor(name: string, socketId: string, accountId?: string) {
    this._username = name;
    this._socketId = socketId;
    accountId ? (this._accountId = accountId) : (this._accountId = "-1");
    this._storage = new Storage();
  }

  /* -------------------------------- Get & Set ------------------------------- */

  public get accountId(): string {
    return this._accountId;
  }
  public set accountId(value: string) {
    this._accountId = value;
  }

  public get socketId(): string {
    return this._socketId;
  }
  public set socketId(value: string) {
    this._socketId = value;
  }

  public get username(): string {
    return this._username;
  }
  public set username(value: string) {
    this._username = value;
  }

  public get score(): number {
    return this._score;
  }
  public set score(value: number) {
    this._score = value;
  }

  public get storage(): Storage {
    return this._storage;
  }
  public set storage(value: Storage) {
    this._storage = value;
  }
}
