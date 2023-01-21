export interface IRegisterBody {
  email: string
  username: string;
  password: string;
}

export interface ILoginBody {
  email:string;
  password: string;
}

export interface IGetAccountBody {
  accountId: string;
}

export interface IRenewHeaders {
  refreshToken: string;
}