import { IAccountModel } from "../IAccountModel";
import MongoAccountModel from "../daoMongo/MongoAccountModel";
import { IModelFactory } from "./IModelFactory";
import { IStatsModel } from "../IStatsModel";
import MongoStatsModel from "../daoMongo/MongoStatsModel";

export default class MongoModelFactory implements IModelFactory {
  createAccount(): IAccountModel {
    return new MongoAccountModel();
  }

  createStats(): IStatsModel {
    return new MongoStatsModel();
  }
}
