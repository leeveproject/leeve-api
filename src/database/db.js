import { Sequelize } from "sequelize";
import { database } from "../../config.js";

export const sequelize = new Sequelize(database.database, database.user, database.password, {
  host: database.host,
  dialect: "mysql",
  port: database.port
});