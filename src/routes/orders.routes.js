import { Router } from "express";
import { createOrder, getOneByStore, getOrderByUser, getOrders } from "../controllers/orders.controller.js";
import { checkToken } from "../middlewares/auth.js";

const router = Router();

router.post("/", [checkToken], createOrder);

router.get("/admin", getOrders);

router.get("/", [checkToken], getOrderByUser);

router.get("/:store/:orderId", getOneByStore);

export default router;
