import { Player } from "./Player";

/**
 * Classe représentant un lobby.
 * Un lobby est un espace de jeu virtuel où des joueurs peuvent se connecter et jouer ensemble.
 */

export class Lobby {
  /**
   * Liste des joueurs connectés dans le lobby.
   */
  private _players: Player[] = [];
  /**
   * Identifiant unique du lobby.
   */
  private _lobbyId: string;

  /**
   * Constructeur de la classe.
   * Crée un nouveau joueur et l'ajoute à la liste des joueurs connectés.
   * @param username - Nom d'utilisateur du joueur.
   * @param socketId - Identifiant unique de la socket du joueur.
   * @param accountId - Identifiant de compte du joueur (optionnel).
   */
  constructor(username: string, socketId: string, accountId?: string) {
    this._players[0] = new Player(username, socketId, accountId);
    this.lobbyId = socketId;
  }

  /* -------------------------------- Get & Set ------------------------------- */

  /**
   * Getter pour la liste des joueurs connectés.
   */
  public get players() {
    return this._players;
  }

  /**
   * Getter pour l'identifiant unique du lobby.
   */
  public get lobbyId(): string {
    return this._lobbyId;
  }

  /**
   * Setter pour l'identifiant unique du lobby.
   */
  public set lobbyId(value: string) {
    this._lobbyId = value;
  }

  /* -------------------------------- Méthods -------------------------------- */

  /**
   * Ajoute un nouveau joueur à la liste des joueurs connectés.
   * @param username - Nom d'utilisateur du joueur.
   * @param socketId - Identifiant unique de la socket du joueur.
   * @param accountId - Identifiant de compte du joueur (optionnel).
   */
  public addPlayer(username: string, socketId: string, accountId?: string) {
    this._players.push(new Player(username, socketId, accountId));
  }

  /**
   * Supprime un joueur de la liste des joueurs connectés.
   * @param socketId - Identifiant unique de la socket du joueur à supprimer.
   */
  public removePlayer(socketId: string) {
    let player: Player;
    this._players.forEach((element: Player) => {
      if (element.socketId === socketId) {
        player = element;
      }
    });
    let index = this._players.indexOf(player);
    if (index > -1) {
      this._players.splice(index, 1);
    }
  }
}
