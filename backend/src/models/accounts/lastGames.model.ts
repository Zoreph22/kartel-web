import { ObjectId } from "mongodb";
import { connection, kartelDb } from "../mongodb";

export interface LastGames {}

export const readLastGamesByUsername = async (username: string) => {};

export const readLastGamesById = async (id: string) => {};

export default {
  readLastGamesByUsername,
  readLastGamesById,
};
