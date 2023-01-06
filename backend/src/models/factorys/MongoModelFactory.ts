import { IAccountModel } from "../IAccountModel";
import MongoAccountModel from "../daoMongo/MongoAccountModel";
import { IModelFactory } from "./IModelFactory";
import { IStatsModel } from "../IStatsModel";
import MongoStatsModel from "../daoMongo/MongoStatsModel";
import MOngoGamesModels from "../daoMongo/MongoGamesModel";
import MongoGamesModel from "../daoMongo/MongoGamesModel";

export default class MongoModelFactory implements IModelFactory {
  createGames() {
    return new MongoGamesModel();
  }

  createAccount(): IAccountModel {
    return new MongoAccountModel();
  }

  createStats(): IStatsModel {
    return new MongoStatsModel();
  }
}
