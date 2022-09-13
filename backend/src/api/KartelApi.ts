import { Application, NextFunction, Request, Response } from "express";
import { Lobby } from "../services/game/Lobby";
import { lobbys } from "../services/collections/Lobbys";
import { Player } from "../services/game/Player";
import { players } from "../services/collections/Players";
import * as messages from "../sockets/messages";

export const KartelApi = (pointerApp: Application) => {
  const app: Application = pointerApp;

  /* ---------------------------------- Menu ---------------------------------- */

  app.post("/createPlayer", (req: Request, res: Response) => {
    players.createPlayer(req.body.name, req.body.playerId);
  });

  /* ---------------------------------- Lobby --------------------------------- */

  app.post("/createLobby", (req: Request, res: Response) => {
    let player: Player = players.find(req.body.playerId);
    if (player) {
      lobbys.createLobby(player);
      player.roomId = player.playerId;
      player.ownsRoom = true;

      messages.updateLobby(player.roomId);
    } else {
      res.sendStatus(400);
    }
  });

  app.post("/joinLobby", (req: Request, res: Response) => {
    let lobby: Lobby = lobbys.find(req.body.lobbyId);
    let player = players.find(req.body.playerId);

    if (lobby) {
      lobby.join(player);
      messages.updateLobby(player.roomId);
    } else {
      res.sendStatus(400);
    }
  });

  app.post("/quitLobby", (req: Request, res: Response) => {
    let lobby: Lobby = lobbys.find(req.body.lobbyId);
    let player = players.find(req.body.playerId);

    if (lobby) {
      lobby.quit(player);
      messages.updateLobby(player.roomId);
    } else {
      res.sendStatus(400);
    }
  });

  app.post("/start", (req: Request, res: Response) => {
    let lobby: Lobby = lobbys.find(req.body.playerId);
    if (lobby) {
      if (lobby.players[0].playerId === req.body.playerId) {
        lobby.startGame();

        messages.updateLobby(lobby.lobbyId);
        messages.updateBoardGame(lobby.lobbyId);
        messages.updateJail(lobby.lobbyId);
        messages.updateScore(lobby.lobbyId);
      } else {
        res.status(400).send("Le joueur qui émit la requête n'est pas le bon");
      }
    } else {
      res.sendStatus(400);
    }
  });

  /* ------------------------------- Game Action ------------------------------ */

  app.post("/rolldice", (req: Request, res: Response) => {
    let lobby: Lobby = lobbys.find(req.body.playerId);
    if (lobby) {
      let game = lobby.game;
      if (game.players[game.playerTurnId].playerId === req.body.playerId) {
        game.diceRoll();
        messages.diceRoll(lobby.lobbyId);
      } else {
        res.status(400).send("Le joueur qui émit la requête n'est pas le bon");
      }
    } else {
      res.sendStatus(400);
    }
  });

  app.post("/play", (req: Request, res: Response) => {
    let lobby: Lobby = lobbys.find(req.body.playerId);
    if (lobby) {
      let game = lobby.game;
      if (game.players[game.playerTurnId].playerId === req.body.playerId) {
        let gameover: boolean = game.play(req.body.shift);

        messages.updateBoardGame(lobby.lobbyId);
        messages.updateJail(lobby.lobbyId);
        messages.updateScore(lobby.lobbyId);

        if (gameover) {
          messages.finalState(lobby.lobbyId);
        }
      } else {
        res.status(400).send("Le joueur qui émit la requête n'est pas le bon");
      }
    } else {
      res.sendStatus(400);
    }
  });
};
