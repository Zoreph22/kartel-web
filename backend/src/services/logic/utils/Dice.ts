export class Dice {
  //Déclarations des attributs facecourante et du tableau d'entier permettant le fonctionnement du dé
  private _face: number;

  //Méthodes get et set pour l'attributs facecourante
  public get face(): number {
    return this._face;
  }
  public set face(value: number) {
    this._face = value;
  }

  public rollDice(): number {
    //Méthodes permettant le lancement du dé et l'affectation de la face du dé a l'attributs facecourante
    let lancer: number = Math.floor(Math.random() * 2 + 2);
    this.face = lancer;
    return this.face;
  }
}
