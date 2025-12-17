import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.ATLAS_URI);

let db;

try {
  await client.connect();
  db = client.db("recipe_finder");
  console.log("MongoDB connected");
} catch (err) {
  console.error("MongoDB connection error:", err);
}

export default db;
