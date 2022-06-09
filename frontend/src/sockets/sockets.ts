import { io, Socket } from "socket.io-client";

export class Sockets {
  private socket: Socket;

  constructor() {
    this.socket = io("ws://localhost:4000");
    this.initClientSockets();
  }

  public initClientSockets() {
    this.socket.on("connect", () => {
      console.log(this.socket.id);
    });
  }
}

export const socket = new Sockets();
