import { Router } from "express";
import { Users } from "./user.js";
import { products } from "./products.js";
import { pendingClients } from "./pendingClients.js";
import { pendingSuppliers } from "./pedingSuppliers.js";

export const routes = Router();

routes.use(Users);
routes.use(products);
routes.use(pendingSuppliers);
routes.use(pendingClients);