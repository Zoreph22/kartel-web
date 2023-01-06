import { Db, ObjectId, WithId } from "mongodb";
import { dbconnection } from "../../app";
import { stripId } from "../../utils";
import MongoDbConnection from "../databases/MongoDbConnection";
import { Game } from "../IGamesModels";

export default class MOngoGamesModel {
  private kartelDb: Db;

  constructor() {
    this.kartelDb = (<MongoDbConnection>dbconnection).kartelDb;
  }

  public async readGameByGameId(id: string): Promise<Game> {
    const game = await this.kartelDb.collection<Game>("games").findOne({ gameId: id });
    if (game) {
      return {
        id: "" + game._id,
        date: game.date,
        gameId: game.gameId,
        players: game.players,
        jail: game.jail,
        board: game.board,
      };
    } else {
      return null;
    }
  }

  public async readGamesByUserId(id: string): Promise<Game[]> {
    const game = await this.kartelDb
      .collection<Game>("games")
      .find({
        "players.playerId": id,
      })
      .toArray();
    if (game) {
      return game.map((element: WithId<Game>) => {
        let obj: Game = {
          id: "" + element._id,
          date: element.date,
          gameId: element.gameId,
          players: element.players,
          jail: element.jail,
          board: element.board,
        };
        return obj;
      });
    } else {
      return null;
    }
  }

  public async createGame(game: Game): Promise<string> {
    const result = await this.kartelDb.collection<Game>("games").insertOne(game);
    if (result) return "" + result.insertedId;
    else return null;
  }

  public async updateGame(game: Game): Promise<void> {
    const result = await this.kartelDb
      .collection<Game>("games")
      .replaceOne({ _id: new ObjectId(game.id) }, stripId(game));
  }

  //@TODO Faire le delete cascade sur un user qui aurait supprimer son compte.
  public async deleteGame(game: Game): Promise<void> {
    const result = await this.kartelDb
      .collection<Game>("games")
      .deleteOne({ _id: new ObjectId(game.id) });
  }
}
