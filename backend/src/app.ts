import express, { Application, NextFunction, Request, Response } from "express";
import { KartelApi } from "./api/kartel/KartelApi";
import { socket } from "./sockets/sockets";
import cors from "cors";
import morgan from "morgan";
import mongoSanitize from "express-mongo-sanitize"
import { AccountApi } from "./api/account/AccountApi";
import MongoDbConnection from "./models/databases/MongoDbConnection";
import accountModel from "./models/daoMongo/MongoAccountModel";
import { DB_TYPE } from "./config";
import { Database } from "./models/databases/Database";
import MongoModelFactory from "./models/factorys/MongoModelFactory";
import { IAccountModel } from "./models/IAccountModel";
import { IGamesModel } from "./models/IGamesModels";
import { isAdmin } from "./api/middleswares/PermsMiddleware";


/* -------------------------------- Init App -------------------------------- */

const app: Application = express();
export let dbconnection: Database;
let mongofactory;

app.use(cors()); // Activation de CORS
app.use(express.json());
app.use(mongoSanitize());
app.use(morgan("tiny")); // Activation de Morgan

socket.initServerSocket(app);
KartelApi(app);
AccountApi(app);

const dbInit = async () => {
  if(DB_TYPE === "mongodb") {
    dbconnection = new MongoDbConnection();
    await dbconnection.connect();
    mongofactory = new MongoModelFactory();
    // let account: IGamesModel = mongofactory.createGames()
    // let temp = await account.readGamesByUserId("123");
    // temp.password = "fgdihfdlkgghids";
    // await account.updateAccount(temp);
  } else {
    throw new Error("Database not found ! - " + DB_TYPE);
  }
}

dbInit()

app.listen(5000, () => {
  // console.log("Server running");
});

//const kartel: Kartel = new Kartel();
// kartel.main();
