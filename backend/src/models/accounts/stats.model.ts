import { ObjectId } from "mongodb";
import { connection, kartelDb } from "../mongodb";

export interface Stats {
  win: number;
  lose: number;
  played: number;
  moneyStolen: number;
  jailedBosses: number;
  gangsterKilled: number;
  id: string;
}

export const readStatsById = async (id: string): Promise<Stats> => {
  const stats = await kartelDb.collection<Stats>("stats").findOne({ _id: new ObjectId(id) });
  if (stats) {
    return {
      win: stats.win,
      lose: stats.lose,
      played: stats.played,
      moneyStolen: stats.moneyStolen,
      jailedBosses: stats.jailedBosses,
      gangsterKilled: stats.gangsterKilled,
      id: "" + stats._id,
    };
  } else {
    return null;
  }
};

export const createStats = async (stats: Stats): Promise<String> => {
  const result = await kartelDb.collection<Stats>("stats").insertOne(stats);
  if (result) return "" + result.insertedId;
  else return null;
};

export const updateStats = async (stats: Stats) => {
  const id = stats.id;
  delete stats.id;
  const result = await kartelDb
    .collection<Stats>("stats")
    .replaceOne({ _id: new ObjectId(id) }, stats);
  stats.id = id;
};

export const deleteStats = async (stats: Stats) => {
  const result = await kartelDb
    .collection<Stats>("stats")
    .deleteOne({ _id: new ObjectId(stats.id) });
};

export default {
  readStatsById,
  createStats,
  updateStats,
  deleteStats,
};
