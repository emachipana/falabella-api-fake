import express from "express";
import cors from "cors";
import categoriesRoutes from "../src/routes/categories.routes.js";
import productsRoutes from "../src/routes/products.routes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/categories", categoriesRoutes);
app.use("/api/products", productsRoutes);

export default app;
