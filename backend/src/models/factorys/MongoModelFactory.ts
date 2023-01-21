import { IAccountModel } from "../IAccountModel";
import MongoAccountModel from "../daoMongo/MongoAccountModel";
import { IModelFactory } from "./IModelFactory";
import { IStatsModel } from "../IStatsModel";
import MongoStatsModel from "../daoMongo/MongoStatsModel";
import MOngoGamesModels from "../daoMongo/MongoGamesModel";
import MongoGamesModel from "../daoMongo/MongoGamesModel";
import { IGamesModel } from "../IGamesModels";

export default class MongoModelFactory implements IModelFactory {
  createGames(): IGamesModel {
    return new MongoGamesModel();
  }

  createAccount(): IAccountModel {
    return new MongoAccountModel();
  }

  createStats(): IStatsModel {
    return new MongoStatsModel();
  }
}
