import { Jail } from "./Jail";
import { Reserve } from "./Reserve";

export class Player {
  //Attributs de la classe player
  private _name: string;
  private _storage: Reserve;
  private _playerId: string;
  private _roomId: string;
  private _ownsRoom: boolean;

  constructor(name: string, playerId: string ,storage: Reserve) {
    this.name = name;
    this._playerId = playerId;
    this.storage = storage;
  }

  /* -------------------------------- Get & Set ------------------------------- */

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get playerId(): string {
    return this._playerId;
  }
  public set playerId(value: string) {
    this._playerId = value;
  }

  public get roomId(): string {
    return this._roomId;
  }
  public set roomId(value: string) {
    this._roomId = value;
  }

  public get storage(): Reserve {
    return this._storage;
  }
  public set storage(value: Reserve) {
    this._storage = value;
  }

  public get ownsRoom(): boolean {
    return this._ownsRoom;
  }
  public set ownsRoom(value: boolean) {
    this._ownsRoom = value;
  }

  /* --------------------------------- Methods -------------------------------- */

  //Méthodes toString pour l'affichage du score du player ainsi que la collection de token qu'il possède
  public toString(jail: Jail): string {
    return this.name + "(" + this.storage.calcScore(jail) + ") :" + this.storage.toString();
  }
}
