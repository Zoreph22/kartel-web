import { Application } from "express";
import { AccountsApi } from "../account/AccountsApi";
import { AdminApi } from "../account/AdminApi";
import { SavedGamesApi } from "../account/SavedGamesApi";
import StatsApi from "../account/StatsApi";
import { Api } from "../Api";
import { GamesApi } from "../kartel/GamesApi";
import { LobbysApi } from "../kartel/LobbysApi";
import { IApiFactory } from "./IApiFactory";

export default class ApiFactory implements IApiFactory {
  constructor() {
    this.initAccountsApi();
    this.initAdminApi();
    this.initSavedGamesApi();
    this.initStatsApi();
    this.initGamesApi();
    this.initLobbysApi();
  }

  initAccountsApi(): AccountsApi {
    return new AccountsApi();
  }
  initAdminApi(): AdminApi {
    return new AdminApi();
  }
  initSavedGamesApi(): SavedGamesApi {
    return new SavedGamesApi();
  }
  initStatsApi(): StatsApi {
    return new StatsApi();
  }
  initGamesApi(): GamesApi {
    return new GamesApi();
  }
  initLobbysApi(): LobbysApi {
    return new LobbysApi();
  }
}
