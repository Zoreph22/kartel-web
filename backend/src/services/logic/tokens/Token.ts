export enum ETokenType {
  Detective = "detective",
  Boss = "boss",
  Gangster = "gangster",
  MoneyBag = "moneybag",
}

export enum ETokenColor {
  Rouge = "rouge",
  Bleu = "bleu",
  Vert = "vert",
  Jaune = "jaune",
  Pink = "pink",
  Orange = "orange",
  Purple = "purple",
}

export abstract class Token{
  public abstract getType(): ETokenType;
}