import express from "express";
import cors from "cors";
import categoriesRoutes from "../src/routes/categories.routes.js";
import productsRoutes from "../src/routes/products.routes.js";
import ordersRoutes from "../src/routes/orders.routes.js";
import authRoutes from "../src/routes/auth.routes.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use("/api/categories", categoriesRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/orders", ordersRoutes);
app.use("/api/auth", authRoutes);

export default app;
