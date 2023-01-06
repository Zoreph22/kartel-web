export class Dice {
  //Déclarations des attributs facecourante et du tableau d'entier permettant le fonctionnement du dé
  private _facecourante: number;

  //Méthodes get et set pour l'attributs facecourante
  public get facecourante(): number {
    return this._facecourante;
  }
  public set facecourante(value: number) {
    this._facecourante = value;
  }

  public lancerDe(): number {
    //Méthodes permettant le lancement du dé et l'affectation de la face du dé a l'attributs facecourante
    let lancer: number = <number>(Math.floor(Math.random() * 2 + 2));
    this.facecourante = lancer;
    return this.facecourante;
  }
}
