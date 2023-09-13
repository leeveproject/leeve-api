import { config } from "dotenv";

config();

export const server = {
  port: process.env.PORT
}

export const database = {
  database: process.env.DB_DATABASE,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT
}