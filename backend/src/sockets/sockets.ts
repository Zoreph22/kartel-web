import { Application } from "express";
import http, { createServer } from "http";
import io, { Server } from "socket.io";

export class Sockets {
  private _app: Application;
  private _httpServer: http.Server;
  private _io: io.Server;
  private _connections = {};

  /* -------------------------------- Get & Set ------------------------------- */

  public get app(): Application {
    return this._app;
  }
  public set app(value: Application) {
    this._app = value;
  }

  public get httpServer(): http.Server {
    return this._httpServer;
  }
  public set httpServer(value: http.Server) {
    this._httpServer = value;
  }

  public get io(): io.Server {
    return this._io;
  }
  public set io(value: io.Server) {
    this._io = value;
  }

  public get connections() {
    return this._connections;
  }
  public set connections(value) {
    this._connections = value;
  }

  /* -------------------------------- Méthodes -------------------------------- */

  public initServerSocket(app: Application) {
    this.app = app;
    this.httpServer = createServer(this.app);
    this.io = new Server(this.httpServer, { cors: { origin: "http://localhost:3000" } });

    this.io.on("connection", (socket) => {
      this.registerClientSocket(socket);

      socket.on("disconnect", () => {
        delete this.connections[socket.id];
      });
    });

    this._httpServer.listen(4000);
  }

  public registerClientSocket(socket: io.Socket) {
    this.connections[socket.id] = socket;
    // console.log(socket.id);
    // console.log(this.connections);
  }
}

export const socket = new Sockets();