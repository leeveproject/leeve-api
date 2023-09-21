import { Router } from "express";
import { products } from "./products.js";

export const routes = Router();

routes.use(products);