import { inherits } from "util";
import { AccountsApi } from "../account/AccountsApi";
import { AdminApi } from "../account/AdminApi";
import { SavedGamesApi } from "../account/SavedGamesApi";
import StatsApi from "../account/StatsApi";
import { GamesApi } from "../kartel/GamesApi";
import { LobbysApi } from "../kartel/LobbysApi";

export interface IApiFactory {
  initAccountsApi(): AccountsApi;
  initAdminApi(): AdminApi;
  initSavedGamesApi(): SavedGamesApi;
  initStatsApi(): StatsApi;

  initGamesApi(): GamesApi;
  initLobbysApi(): LobbysApi;
}
