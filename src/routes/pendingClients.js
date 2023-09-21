import { Router } from "express";
import { addPendingClients, deletePendingClients, getPendingClients, updatePendingClients } from "../controllers/pendingClients/index.js";

export const pendingClients = Router();

pendingClients.get("/clients", getPendingClients);
pendingClients.post("/clients", addPendingClients);
pendingClients.put("/clients/:id", updatePendingClients);
pendingClients.delete("/clients/:id", deletePendingClients);