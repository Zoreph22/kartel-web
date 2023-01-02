import { Db, MongoClient } from "mongodb";
import { MONGO_URI } from "../../config";
import { Database } from "./Database";

export default class MongoDbConnection extends Database {
  private _kartelDb: Db;
  private uri = MONGO_URI;
  private connection = new MongoClient(this.uri);

  public get kartelDb(): Db {
    return this._kartelDb;
  }

  public async connect() {
    try {
      // Connect the client to the server (optional starting in v4.7)
      await this.connection.connect();
      // Establish and verify connection
      await this.connection.db("kartel").command({ ping: 1 });
      this._kartelDb = this.connection.db("kartel");

      console.log("Connected successfully to database");
    } catch (e) {
      console.error(e);
      await this.connection.close();
    }
  }

  public async disconnect() {
    await this.connection.close();
  }
}
