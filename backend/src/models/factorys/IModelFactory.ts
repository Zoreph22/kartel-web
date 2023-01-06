import { IAccountModel } from "../IAccountModel";
import MongoAccountModel from "../daoMongo/MongoAccountModel";
import { IStatsModel } from "../IStatsModel";
import { IGamesModel } from "../IGamesModels";

export interface IModelFactory {
  createAccount(): IAccountModel;
  createStats(): IStatsModel;
  createGames(): IGamesModel;
}


