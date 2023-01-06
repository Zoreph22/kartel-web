import { Dice } from "../game/Dice";
import { Player } from "../game/Player";
import { Board } from "../game/Board";
import { Jail } from "../game/Jail";
import readline from "readline-sync"
import { Boss } from "../game/Boss";
import { Gang } from "../game/Gang";

export class Partie {
  //Attributs de la classe Partie
  private de: Dice = new Dice();
  private jail: Jail = new Jail();
  private board: Board = new Board();
  // private players: Player[];

  // public getPlayers(): Player[] {return this.players;}
  // public setPlayers(players: Player[] ): void{this.players = players;}

  //Initialisation de certains attributs
  public initPartie(): void{
      this.board.initBoard();
  }

  //Méthode qui permet de gérer le tour de jeu d'un player
//   public gestionTour(player: Player): void{
//       this.de.lancerDe();
//       let nbcase: number = 0;
//       this.affEtatPartie();
//       let ok: boolean = false;
//       let face: number;
//       do{
//           ok = false;
//           console.log("C'est à "+ player.name+" de jouer");
//           face = this.de.facecourante;
//           console.log("Résultat du dé : "+face+", ");
//           console.log("que jouez-vous ? : ");
//           while(!ok){
//               // try{
//                   nbcase = +readline.question();
//                   ok = true;
//               // }
//               // catch(e: NumberFormatException ){
//                   // console.log("Format Numérique Incorrect");
//                   // console.log("que jouez-vous ? : ");
//               // }
//           }
//       }while(nbcase>face || nbcase == 0);
//       this.recuptoken(nbcase, player, face);
//   }

  //Méthode qui permet de récupérer les token, de déplacer le detective et de restart le board
//   public recuptoken(playcase: number, player: Player , facede: number): void{
//       let currentpos: number = this.board.detective.CurrentPos(this.board);
//       let nextpos: number = currentpos + playcase;
//       if(currentpos + facede >= this.board.PlatLength()){
//           this.board.restartPlat();
//           currentpos = 0;
//           nextpos = currentpos + playcase;
//       }
//       if(this.board.getElemBoard(nextpos) instanceof Boss){
//           let b: Boss = <Boss> this.board.getElemBoard(nextpos);
//           this.jail.ajoutboss(b);
//       }
//       else{
//           let g: Gang = <Gang> this.board.getElemBoard(nextpos);
//           player.storage.placeInReserve(g);
//       }
//       this.board.detective.deplacement(currentpos, playcase);
//       this.board.setElemBoard(nextpos, this.board.detective);
//       this.board.deleteCase(currentpos);
//   }

  //Méthode qui permet de gérer les différent ordre de tour de jeu ainsi que l'avancé de la partie
//   public gestionPartie(): void{
//       let i:number = 0;
//       do{
//           if(i>=this.players.length){
//               i=0;
//           }
//           this.gestionTour(this.players[i]);
//           i++;
//       }while(!this.jail.jailPleine());
//       this.affEtatPartie();
//       console.log("La partie du Jeu Kartel est fini !");
//       let gagnant: Player  = this.findBestPlayer();
//       console.log("Le gagnant de la partie est le player "+gagnant.name+" avec un score de : "+gagnant.storage.calcScore(this.jail));
//   }

//   public findBestPlayer(): Player{
//       let max: number = 0, i: number = 0;
//       for(let j=0; i<this.players.length-1;j++){
//           if(this.players[j].storage.calcScore(this.jail) > max){
//               max = this.players[j].storage.calcScore(this.jail);
//               i = j;
//           }
//       }
//       return this.players[i];
//   }

  //Méthode qui affiche l'état de la partie avec le tableau, la jail et les players
//   public affEtatPartie(): void {
//       console.log("***********************************************");
//       console.log();
//       console.log(this.board.toString());
//       console.log();
//       console.log(this.jail.toString());
//       console.log();
//       for(let i=0;i<=this.players.length-1;i++){
//           let aff: string = this.players[i].toString(this.jail);
//           console.log(aff);
//       }
//       console.log();
//   }

}