import { Router } from "express";
import { getCategoriesByStore } from "../controllers/categories.controller.js";

const router = Router();

router.get("/", getCategoriesByStore);

export default router;
