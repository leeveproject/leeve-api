import { Router } from "express";
import { getProducts, addProducts, updateProducts, deleteProducts } from "../controllers/products/index.js"

export const products = Router();

products.get("/products", getProducts);
products.post("/products", addProducts);
products.put("/products/:id", updateProducts);
products.delete("/products/:id", deleteProducts);