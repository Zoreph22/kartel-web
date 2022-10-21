import express, { Application, NextFunction, Request, Response } from "express";
import { KartelApi } from "./api/KartelApi";
import { socket } from "./sockets/sockets";
import cors from "cors";
import morgan from "morgan";
import mongoSanitize from "express-mongo-sanitize"
import { AccountApi } from "./api/AccountApi";
import mongodb from "./models/mongodb";
import accountModel from "./models/accounts/account.model";

/* -------------------------------- Init App -------------------------------- */

const app: Application = express();

app.use(cors()); // Activation de CORS
app.use(morgan("tiny")); // Activation de Morgan
app.use(express.json());
app.use(mongoSanitize());

socket.initServerSocket(app);
KartelApi(app);
AccountApi(app);

const func = async () => {
  await mongodb.run();
}

func();


app.listen(5000, () => {
  // console.log("Server running");
});

//const kartel: Kartel = new Kartel();
// kartel.main();
