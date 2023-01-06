import { ETokenColor, ETokenType } from "../services/logic/tokens/Token";

interface IToken {
  type: ETokenType;
}

interface IGang extends IToken {
  type: ETokenType.Boss | ETokenType.Gangster | ETokenType.MoneyBag;
  color: ETokenColor;
}

interface IGangster extends IGang {
  type: ETokenType.Gangster;
  size: number;
}

interface IBoss extends IGang {
  type: ETokenType.Boss;
}

interface IMoneyBag extends IGang {
  type: ETokenType.MoneyBag;
}

interface IDetective extends IToken {
  type: ETokenType.Detective;
  position: number;
}

/* --------------- Interface et Model pour la collection Games -------------- */

export interface Player {
  playerId?: string;
  username: string;
  score: number;
  storage: IGang[];
}

export interface Game {
  id?: string;
  date: string;
  gameId: string;
  players: Player[];
  jail: IBoss[];
  board: IToken[];
}

export interface IGamesModel {
  readGameByGameId(id: string): Promise<Game>;
  readGamesByUserId(id: string): Promise<Game[]>;
  createGame(game: Game): Promise<string>;
  updateGame(game: Game): Promise<void>;
  deleteGame(game: Game): Promise<void>;
}
