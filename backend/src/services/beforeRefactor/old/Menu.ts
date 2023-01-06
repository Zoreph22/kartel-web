import { Player } from "../game/Player";
import { Partie } from "./Partie";
import { PartieSettings } from "./PartieSettings";
import { Reserve } from "../game/Reserve";
import readline from "readline-sync"

export class Menu {
  private _partie: Partie = new Partie();
  private _setting: PartieSettings = new PartieSettings();
  private _textMenu: string;

  // Get & Set
  public get textMenu(): string {
    return this._textMenu;
  }
  public set textMenu(value: string) {
    this._textMenu = value;
  }

  public get partie(): Partie {
    return this._partie;
  }
  public get setting(): PartieSettings {
    return this._setting;
  }

  //Fonction principale de la classe menu qui permet de lancer le paramétrage de la partie
  public menuStart(): void{
      this.inputPlayerName();
      //partieSetting();
      // this.setting.inputGangToken();
      this.partie.initPartie();
  }

  //Ce bout de code permet la saisie des players de la partie
  public inputPlayerName(): void{
      console.log("Nombre de player de la partie ?");
      let x: number = +readline.question();
      // let players: Player[] = [];
      for(let i=0;i<=x-1;i++){
          console.log("Saisir le nom du Player "+(i+1));
          let nomplayer: string = readline.question();
          // players[i] = new Player(nomplayer, new Reserve());
      }
      // this.partie.setPlayers(players);
  }

  public toString(): string{

      return this.textMenu;
  }
}