export interface Stats {
  win: number;
  lose: number;
  played: number;
  moneyStolen: number;
  jailedBosses: number;
  gangsterKilled: number;
  id: string;
}

export interface IStatsModel {
  readStatsById(id: string): Promise<Stats>
  createStats(stats: Stats): Promise<String>
  updateStats(stats: Stats): Promise<void>
  deleteStats(stats: Stats): Promise<void>
}