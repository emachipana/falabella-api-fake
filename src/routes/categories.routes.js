import { Router } from "express";
import { getCategoriesByStore } from "../controllers/categories.controller.js";

const router = Router();

/**
 * @swagger
 * /api/categories:
 *   get:
 *     tags: [Categories]
 *     summary: Obtener categorías de la tienda
 *     description: Devuelve una lista de categorías disponibles en la tienda especificada
 *     parameters:
 *       - in: query
 *         name: store
 *         required: true
 *         schema:
 *           type: string
 *         description: Nombre de la tienda
 *     responses:
 *       200:
 *         description: Lista de categorías
 *         content:
 *           application/json:
 *             example:
 *               - id: "1"
 *                 name: "Electrónica"
 *                 storeName: "TIENDA_1"
 *               - id: "2"
 *                 name: "Hogar"
 *                 storeName: "TIENDA_1"
 */
router.get("/", getCategoriesByStore);

export default router;
