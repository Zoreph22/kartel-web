import { Prison } from "./Prison";
import { Reserve } from "./Reserve";

export class Player {
  //Attributs de la classe joueur
  private _name: string;
  private _reserve: Reserve;
  private _playerId: string;
  private _roomId: string;
  private _ownsRoom: boolean;

  constructor(name: string, playerId: string ,reserve: Reserve) {
    this.name = name;
    this._playerId = playerId;
    this.reserve = reserve;
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

  public get reserve(): Reserve {
    return this._reserve;
  }
  public set reserve(value: Reserve) {
    this._reserve = value;
  }

  public get ownsRoom(): boolean {
    return this._ownsRoom;
  }
  public set ownsRoom(value: boolean) {
    this._ownsRoom = value;
  }

  /* --------------------------------- Methods -------------------------------- */
  
  //Méthodes toString pour l'affichage du score du joueur ainsi que la collection de jeton qu'il possède
  public toString(prison: Prison): string {
    return this.name + "(" + this.reserve.calcScore(prison) + ") :" + this.reserve.toString();
  }
}
