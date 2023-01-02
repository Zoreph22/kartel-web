//TODO games: string[];, rajouter un champs
export interface Account {
  username: string;
  password: string;
  accountType: "registered" | "anonymous";
  id?: string;
}

export interface IAccountModel {
  readAccountByUsername(username: string): Promise<Account>;
  readAccountById(id: string): Promise<Account>;
  createAccount(account: Account): Promise<string>;
  updateAccount(account: Account): Promise<void>;
  deleteAccount(account: Account): Promise<void>;
}