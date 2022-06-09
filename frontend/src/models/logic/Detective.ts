import { Jeton } from "./Jeton";
import { Plateau } from "./Plateau";

export class Detective extends Jeton {

  //Attributs de classe qui contient la position du detective
  private _position: number;

  //Méthode get et set pour l'attribut position
  public get position(): number {
    return this._position;
  }
  public set position(value: number) {
    this._position = value;
  }

  //Méthode qui retourne la position du detective sur le plateau
  public CurrentPos(plateau: Plateau): number {
    let i: number = 0;
    while (i <= 42) {
      if (plateau.getElemPlateau(i) instanceof Detective) {
        this.position = i;
        i = 43;
      }
      i++;
    }
    return this.position;
  }

  //Méthode de modification de la position du detective vers la nouvelle position
  public deplacement(oldpos: number, nbcase: number): void {
    this.position = oldpos + nbcase;
  }

  public getId(): string {
    return "<>";
  }
}
