import { IAccountModel } from "../IAccountModel";
import MongoAccountModel from "../daoMongo/MongoAccountModel";
import { IStatsModel } from "../IStatsModel";

export interface IModelFactory {
  createAccount(): IAccountModel;
  createStats(): IStatsModel;
}


