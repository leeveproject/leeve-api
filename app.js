import cors from "cors";
import express from "express";
import { database } from "./config.js";
import { sequelize } from "./src/database/db.js";
import { Products } from "./src/models/products/index.js";

const app = express();

app.use(express.json());
app.use(cors());

async function connectDatabase() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    await Products.sync();
    console.log(`Database ${database.database} is connected`);
  } catch (error) {
    console.log(`Database is not connected ${error}`);
  }
}

export {
  app,
  connectDatabase
};