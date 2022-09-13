import { De } from "../game/De";
import { Player } from "../game/Player";
import { Plateau } from "../game/Plateau";
import { Prison } from "../game/Prison";
import readline from "readline-sync"
import { Boss } from "../game/Boss";
import { Gang } from "../game/Gang";

export class Partie {
  //Attributs de la classe Partie
  private de: De = new De();
  private prison: Prison = new Prison();
  private plateau: Plateau = new Plateau();
  // private joueurs: Joueur[];

  // public getJoueurs(): Joueur[] {return this.joueurs;}
  // public setJoueurs(joueurs: Joueur[] ): void{this.joueurs = joueurs;}

  //Initialisation de certains attributs
  public initPartie(): void{
      this.plateau.initPlateau();
  }

  //Méthode qui permet de gérer le tour de jeu d'un joueur
//   public gestionTour(joueur: Joueur): void{
//       this.de.lancerDe();
//       let nbcase: number = 0;
//       this.affEtatPartie();
//       let ok: boolean = false;
//       let face: number;
//       do{
//           ok = false;
//           console.log("C'est à "+ joueur.name+" de jouer");
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
//       this.recupjeton(nbcase, joueur, face);
//   }

  //Méthode qui permet de récupérer les jeton, de déplacer le detective et de restart le plateau
//   public recupjeton(playcase: number, joueur: Joueur , facede: number): void{
//       let currentpos: number = this.plateau.detective.CurrentPos(this.plateau);
//       let nextpos: number = currentpos + playcase;
//       if(currentpos + facede >= this.plateau.PlatLength()){
//           this.plateau.restartPlat();
//           currentpos = 0;
//           nextpos = currentpos + playcase;
//       }
//       if(this.plateau.getElemPlateau(nextpos) instanceof Boss){
//           let b: Boss = <Boss> this.plateau.getElemPlateau(nextpos);
//           this.prison.ajoutboss(b);
//       }
//       else{
//           let g: Gang = <Gang> this.plateau.getElemPlateau(nextpos);
//           joueur.reserve.placeInReserve(g);
//       }
//       this.plateau.detective.deplacement(currentpos, playcase);
//       this.plateau.setElemPlateau(nextpos, this.plateau.detective);
//       this.plateau.deleteCase(currentpos);
//   }

  //Méthode qui permet de gérer les différent ordre de tour de jeu ainsi que l'avancé de la partie
//   public gestionPartie(): void{
//       let i:number = 0;
//       do{
//           if(i>=this.joueurs.length){
//               i=0;
//           }
//           this.gestionTour(this.joueurs[i]);
//           i++;
//       }while(!this.prison.prisonPleine());
//       this.affEtatPartie();
//       console.log("La partie du Jeu Kartel est fini !");
//       let gagnant: Joueur  = this.findBestPlayer();
//       console.log("Le gagnant de la partie est le joueur "+gagnant.name+" avec un score de : "+gagnant.reserve.calcScore(this.prison));
//   }

//   public findBestPlayer(): Joueur{
//       let max: number = 0, i: number = 0;
//       for(let j=0; i<this.joueurs.length-1;j++){
//           if(this.joueurs[j].reserve.calcScore(this.prison) > max){
//               max = this.joueurs[j].reserve.calcScore(this.prison);
//               i = j;
//           }
//       }
//       return this.joueurs[i];
//   }

  //Méthode qui affiche l'état de la partie avec le tableau, la prison et les joueurs
//   public affEtatPartie(): void {
//       console.log("***********************************************");
//       console.log();
//       console.log(this.plateau.toString());
//       console.log();
//       console.log(this.prison.toString());
//       console.log();
//       for(let i=0;i<=this.joueurs.length-1;i++){
//           let aff: string = this.joueurs[i].toString(this.prison);
//           console.log(aff);
//       }
//       console.log();
//   }

}