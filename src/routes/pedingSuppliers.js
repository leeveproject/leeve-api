import { Router } from "express";
import { getPendingSuppliers, addPendingSuppliers, updatePendingSuppliers, deletePendingSuppliers } from "../controllers/pendingSuppliers/index.js";

export const pendingSuppliers = Router();

pendingSuppliers.get("/suppliers", getPendingSuppliers);
pendingSuppliers.post("/suppliers", addPendingSuppliers);
pendingSuppliers.put("/suppliers/:id", updatePendingSuppliers);
pendingSuppliers.delete("/suppliers/:id", deletePendingSuppliers);