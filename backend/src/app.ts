import express, { Application, NextFunction, Request, Response } from "express";
import { KartelApi } from "./api/KartelApi";
import { Kartel } from "./models/old/Kartel";
import { socket } from "./sockets/sockets";

/* -------------------------------- Init App -------------------------------- */

const app: Application = express();
socket.initServerSocket(app);
KartelApi(app);

app.listen(5000, () => {
  // console.log("Server running");
});

const kartel: Kartel = new Kartel();
kartel.main();
