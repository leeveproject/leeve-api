import cors from "cors";
import express from "express";
import { database } from "./config.js";
import { routes } from "./src/routes/routes.js";
import { sequelize } from "./src/database/db.js";
import { Users } from "./src/models/users/index.js";
import { Products } from "./src/models/products/index.js";
import { Clients } from "./src/models/pendingClients/index.js";
import { Suppliers } from "./src/models/pendingSuppliers/index.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

async function connectDatabase() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    await Products.sync();
    await Suppliers.sync();
    await Clients.sync();
    await Users.sync();
    console.log(`Database ${database.database} is connected`);
  } catch (error) {
    console.log(`Database is not connected ${error}`);
  }
}

export {
  app,
  connectDatabase
};