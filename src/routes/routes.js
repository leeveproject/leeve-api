import { Router } from "express";
import { products } from "./products.js";
import { pendingSuppliers } from "./pedingSuppliers.js"

export const routes = Router();

routes.use(products);
routes.use(pendingSuppliers);