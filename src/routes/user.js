import { Router } from "express";
import { addUsers, deleteUsers, getUsers, updateUsers } from "../controllers/users/index.js";

export const Users = Router();

Users.get("/users", getUsers);
Users.post("/users", addUsers);
Users.put("/users/:id", updateUsers);
Users.delete("/users/:id", deleteUsers);