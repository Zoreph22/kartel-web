import { ObjectId } from "mongodb";
import { connection, kartelDb } from "../mongodb";

export interface Accounts {
  username: string;
  password: string;
  accountType: "registered" | "anonymous";
  id?: string;
}

export const readAccountByUsername = async (username: string): Promise<Accounts> => {
  const account = await kartelDb.collection<Accounts>("accounts").findOne({ username: username });
  if (account) {
    return {
      username: account.username,
      password: account.password,
      accountType: account.accountType,
      id: "" + account._id,
    };
  } else {
    return null;
  }
};

export const readAccountById = async (id: string): Promise<Accounts> => {
  const account = await kartelDb
    .collection<Accounts>("accounts")
    .findOne({ _id: new ObjectId(id) });
  if (account) {
    return {
      username: account.username,
      password: account.password,
      accountType: account.accountType,
      id: "" + account._id,
    };
  } else {
    return null;
  }
};

export const createAccount = async (account: Accounts): Promise<string> => {
  const result = await kartelDb.collection<Accounts>("accounts").insertOne(account);
  if (result) return "" + result.insertedId;
  else return null;
};

export const updateAccount = async (account: Accounts) => {
  const id = account.id;
  delete account.id;
  const result = await kartelDb
    .collection<Accounts>("accounts")
    .replaceOne({ _id: new ObjectId(id) }, account);
  account.id = id;
};

export const deleteAccount = async (account: Accounts) => {
  const result = await kartelDb
    .collection<Accounts>("accounts")
    .deleteOne({ _id: new ObjectId(account.id) });
};

export default {
  deleteAccount,
  updateAccount,
  createAccount,
  readAccountById,
  readAccountByUsername,
};
