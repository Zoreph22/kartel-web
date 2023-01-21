import { ObjectId, Db } from "mongodb";
import { dbconnection } from "../../app";
import { stripId } from "../../utils";
import MongoDbConnection from "../databases/MongoDbConnection";
import { Account, IAccountModel } from "../IAccountModel";

export default class MongoAccountModel implements IAccountModel {
  private kartelDb: Db;

  constructor() {
    this.kartelDb = (<MongoDbConnection>dbconnection).kartelDb;
  }

  public async readAccountByUsername(username: string): Promise<Account> {
    const account = await this.kartelDb
      .collection<Account>("accounts")
      .findOne({ username: username.toLowerCase() });
    if (account) {
      return {
        email: account.email,
        username: account.username,
        password: account.password,
        accountType: account.accountType,
        isAdmin: account.isAdmin,
        id: "" + account._id,
      };
    } else {
      return null;
    }
  }

  public async readAccountByEmail(email: string): Promise<Account> {
    const account = await this.kartelDb
      .collection<Account>("accounts")
      .findOne({ email: email.toLowerCase() });
      console.log(account);
    if (account) {
      return {
        email: account.email,
        username: account.username,
        password: account.password,
        accountType: account.accountType,
        isAdmin: account.isAdmin,
        id: "" + account._id,
      };
    } else {
      return null;
    }
  }

  public async readAccountById(id: string): Promise<Account> {
    const account = await this.kartelDb
      .collection<Account>("accounts")
      .findOne({ _id: new ObjectId(id) });
    if (account) {
      return {
        email: account.email,
        username: account.username,
        password: account.password,
        accountType: account.accountType,
        isAdmin: account.isAdmin,
        id: "" + account._id,
      };
    } else {
      return null;
    }
  }

  public async createAccount(account: Account): Promise<string> {
    const result = await this.kartelDb.collection<Account>("accounts").insertOne(account);
    if (result) return "" + result.insertedId;
    else return null;
  }

  public async updateAccount(account: Account): Promise<void> {
    const result = await this.kartelDb
      .collection<Account>("accounts")
      .replaceOne({ _id: new ObjectId(account.id) }, stripId(account));
  }

  public async deleteAccount(account: Account): Promise<void> {
    const result = await this.kartelDb
      .collection<Account>("accounts")
      .deleteOne({ _id: new ObjectId(account.id) });
  }
}
