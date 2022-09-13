import { Db, MongoClient } from "mongodb";

// Connection URI
const uri =
  "mongodb://localhost:27017";

// Create a new MongoClient
export const connection = new MongoClient(uri);

export let kartelDb: Db;

export async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await connection.connect();
    // Establish and verify connection
    await connection.db("kartel").command({ ping: 1 });
    kartelDb = connection.db("kartel");

    console.log("Connected successfully to database");
  } catch (e) {
    console.error(e);
    await connection.close();
  }
}

// run().catch(console.dir);

export default {run,connection}