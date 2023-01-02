import { ObjectId } from "mongodb";

export interface LastGames {}

export const readLastGamesByUsername = async (username: string) => {};

export const readLastGamesById = async (id: string) => {};

export default {
  readLastGamesByUsername,
  readLastGamesById,
};
