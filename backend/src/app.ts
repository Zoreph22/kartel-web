import express, { Application, NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import { KartelApi } from "./api/KartelApi";
// import { Kartel } from "./models/old/Kartel";
import { socket } from "./sockets/sockets";
import cors from "cors";
import morgan from "morgan";
import { AccountApi } from "./api/AccountApi";
import mongodb from "./models/mongodb";
import accountModel from "./models/accounts/account.model";

/* -------------------------------- Init App -------------------------------- */

const app: Application = express();

app.use(cors()); // Activation de CORS
app.use(morgan("tiny")); // Activation de Morgan
app.use(express.json());

socket.initServerSocket(app);
KartelApi(app);
AccountApi(app);

const func = async () => {
  await mongodb.run();
  //@ts-ignore
  console.log(await accountModel.readAccountByUsername({ $ne: 1 }));

}

func();


app.listen(5000, () => {
  // console.log("Server running");
});

//const kartel: Kartel = new Kartel();
// kartel.main();
