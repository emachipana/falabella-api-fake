import { Router } from "express";
import { getOneProduct, getProducts, getProductsByCategory, getProductsByStore } from "../controllers/products.controller.js";

const router = Router();

router.get("/store/:storeName", getProductsByStore);
router.get("/category/:categoryId", getProductsByCategory);
router.get("/", getProducts);
router.get("/:id", getOneProduct);

export default router;
