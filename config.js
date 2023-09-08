import { config } from "dotenv";

config();

export const server = {
  port: process.env.PORT
}