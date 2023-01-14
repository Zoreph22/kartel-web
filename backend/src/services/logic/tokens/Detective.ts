import { ETokenType, Token } from "./Token";

export class Detective extends Token {
  public getType(): ETokenType {
    return ETokenType.Detective;
  }

  //Méthode qui retourne la position du detective sur le board
  // public CurrentPos(board: Board): number {
  //   let i: number = 0;
  //   while (i <= 42) {
  //     if (board.getElemBoard(i) instanceof Detective) {
  //       this.position = i;
  //       i = 43;
  //     }
  //     i++;
  //   }
  //   return this.position;
  // }

  //Méthode de modification de la position du detective vers la nouvelle position
  // public deplacement(oldpos: number, nbcase: number): void {
  //   this.position = oldpos + nbcase;
  // }
}
