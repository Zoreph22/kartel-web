import { Db, ObjectId } from "mongodb";
import { IStatsModel, Stats } from "../IStatsModel";
import MongoDbConnection from "../databases/MongoDbConnection";
import { dbconnection } from "../../app";
import { stripId } from "../../utils";

export default class MongoStatsModel implements IStatsModel {
  private kartelDb: Db;

  constructor() {
    this.kartelDb = (<MongoDbConnection>dbconnection).kartelDb;
  }

  public async readStatsById(id: string): Promise<Stats> {
    const stats = await this.kartelDb.collection<Stats>("stats").findOne({ _id: new ObjectId(id) });
    if (stats) {
      return {
        win: stats.win,
        lose: stats.lose,
        played: stats.played,
        moneyStolen: stats.moneyStolen,
        jailedBosses: stats.jailedBosses,
        gangsterKilled: stats.gangsterKilled,
        id: "" + stats._id,
      };
    } else {
      return null;
    }
  }

  public async createStats(stats: Stats): Promise<String> {
    const result = await this.kartelDb.collection<Stats>("stats").insertOne(stats);
    if (result) return "" + result.insertedId;
    else return null;
  }

  public async updateStats(stats: Stats): Promise<void> {
    const result = await this.kartelDb
      .collection<Stats>("stats")
      .replaceOne({ _id: new ObjectId(stats.id) }, stripId(stats));
  }

  public async deleteStats(stats: Stats): Promise<void> {
    const result = await this.kartelDb
      .collection<Stats>("stats")
      .deleteOne({ _id: new ObjectId(stats.id) });
  }
}
