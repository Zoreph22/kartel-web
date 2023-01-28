import { Account } from "../../models/IAccountModel";

export interface IRegisterBody {
  email: string;
  username: string;
  password: string;
}

export interface ILoginBody {
  email: string;
  password: string;
}

export interface IRenewHeaders {
  refreshToken: string;
}

export interface IGetAccountBody {
  accountId: string;
}

export interface IUpdateAccountBody {
  email?: string;
  username?: string;
  password?: string;
  id?: string;
}

export interface IDeleteAccountBody {
  accountId: string;
}
