import readline from "readline-sync"

export class PartieSettings {

  //Variable pour stocker les settings personnaliser
  private settingNomGang: string[];
  private settingJetonGang: string[];
  
  //Settings de base a mettre en cas de non personnalisation
  private nomGangBase: string[] = ["Rouge","Bleu","Vert","Jaune","Magenta","Orange","Gris"];
  private jetonGangBase: string[] = ["boss","solo","duo","duo","trio","pdv"];

  //Variable pour faire les settings
  private listJetonToSetting: string[] = ["solo","duo","trio","pdv"];
  jetonNumberToSetting: number[] = []; //4

  public calculPlateauLength(): number{
      return (this.settingNomGang.length * this.settingJetonGang.length) + 1;
  }

  public getValueSettingNomGang(i: number): string{return this.settingNomGang[i];}
  public getSettingNomGang(): string[] {return this.settingNomGang;}
  public setsettingNomGang(i: number, name: string): void {this.settingNomGang[i]= name;}

  public getValueSettingJetonGang(i: number): string{return this.settingJetonGang[i];}
  public getSettingJetonGang(): String[] {return this.settingJetonGang;}
  public setsettingJetonGang(i: number, jetonName: string): void {this.settingJetonGang[i]= jetonName;}


  public gangNumber(): number{
      let gangNumber: number = +readline.question("Saisir le nombre de gang voulu :");
      return gangNumber;
  }


  public inputGangName(): void {
      let gNumber: number = this.gangNumber();
      this.settingNomGang = new String[gNumber];

      for(let i=0;i<=this.settingNomGang.length-1;i++){
          let name: string = readline.question("Saisir le nom du gang :");
          this.setsettingNomGang(i, name);
      }
  }

  public inputGangJeton(): void{
      let numberInGang: number = 1;
      let x: number = 1;

      for(let i=0;i<=this.listJetonToSetting.length-1;i++){
          let number: number = +readline.question("Combien voulez-vous de "+ this.listJetonToSetting[i]+" pour chaque gang de la partie ?");
          this.jetonNumberToSetting[i] = number;
      }

      for(let y=0;y<=this.jetonNumberToSetting.length-1;y++){
          numberInGang += this.jetonNumberToSetting[y];
      }
      this.settingJetonGang = [];
      this.settingJetonGang[0] = "boss";

      for(let jN=0;jN<=this.listJetonToSetting.length-1;jN++){
          console.log(jN);
          for(let z=0;z<=this.jetonNumberToSetting[jN]-1;z++){
              this.settingJetonGang[x] = this.listJetonToSetting[jN];
              x+=1;
          }
      }

      for(let test=0;test<=this.settingJetonGang.length-1;test++){
          console.log(this.settingJetonGang[test]);
      }
  }
}