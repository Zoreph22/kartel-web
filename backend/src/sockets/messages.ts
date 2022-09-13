import { socket } from "./sockets";
import { Lobby } from "../services/game/Lobby";
import { lobbys } from "../services/collections/Lobbys";
import { Player } from "../services/game/Player";
import { players } from "../services/collections/Players";

const io = socket.io;

/* ---------------------------------- Lobby --------------------------------- */

export const updateLobby = (roomId) => {
  let lobby: Lobby = lobbys.find(roomId);
  if (lobby) {
    let updatedLobby = JSON.stringify(lobby);
    io.to(roomId).emit("updateScore", updatedLobby);
  }
};

export const startGame = (roomId) => {};

/* ------------------------------ Game messages ----------------------------- */

export const diceRoll = (roomId) => {
  let lobby: Lobby = lobbys.find(roomId);
  if (lobby) {
    let diceroll = JSON.stringify({ diceRollResult: lobby.game.diceRollResult });
    io.to(roomId).emit("diceRoll", diceroll);
  }
};

export const updateScore = (roomId) => {
  let lobby: Lobby = lobbys.find(roomId);
  if (lobby) {
    let score = JSON.stringify(lobby.game.players);
    io.to(roomId).emit("updateScore", score);
  }
};

export const updateBoardGame = (roomId) => {
  let lobby: Lobby = lobbys.find(roomId);
  if (lobby) {
    let board = JSON.stringify(lobby.game.plateau);
    io.to(roomId).emit("updateBoard", board);
  }
};

export const updateJail = (roomId) => {
  let lobby: Lobby = lobbys.find(roomId);
  if (lobby) {
    let jail = JSON.stringify(lobby.game.prison);
    io.to(roomId).emit("updateJail", jail);
  }
};

export const finalState = (roomId) => {
  let lobby: Lobby = lobbys.find(roomId);
  if (lobby) {
    io.to(roomId).emit("finaleState", "Fin du jeu");
  }
};
