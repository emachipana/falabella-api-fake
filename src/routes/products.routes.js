import { Router } from "express";
import { getOneProduct, getProducts, getProductsByCategory, getProductsByStore } from "../controllers/products.controller.js";

const router = Router();

/**
 * @swagger
 * /api/products/store/{storeName}:
 *   get:
 *     tags: [Products]
 *     summary: Obtener productos por tienda
 *     description: Devuelve una lista de productos de la tienda especificada
 *     parameters:
 *       - in: path
 *         name: storeName
 *         required: true
 *         schema:
 *           type: string
 *         description: Nombre de la tienda
 *     responses:
 *       200:
 *         description: Lista de productos de la tienda
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 name: "Producto Ejemplo"
 *                 description: "Descripción del producto"
 *                 price: 29.99
 *                 priceDiscount: 24.99
 *                 stock: 10
 *                 categoryName: "Categoría"
 *                 brandName: "Marca"
 *                 storeName: "NOMBRE_TIENDA"
 *                 images: []
 */
router.get("/store/:storeName", getProductsByStore);

/**
 * @swagger
 * /api/products/category/{categoryId}:
 *   get:
 *     tags: [Products]
 *     summary: Obtener productos por categoría
 *     description: Devuelve una lista de productos filtrados por ID de categoría
 *     parameters:
 *       - in: path
 *         name: categoryId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la categoría
 *       - in: query
 *         name: store
 *         required: true
 *         schema:
 *           type: string
 *         description: Nombre de la tienda
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Número máximo de productos a devolver
 *     responses:
 *       200:
 *         description: Lista de productos de la categoría
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 name: "Producto Ejemplo"
 *                 description: "Descripción del producto"
 *                 price: 29.99
 *                 priceDiscount: 24.99
 *                 stock: 10
 *                 categoryName: "Categoría"
 *                 brandName: "Marca"
 *                 storeName: "NOMBRE_TIENDA"
 *                 images: []
 */
router.get("/category/:categoryId", getProductsByCategory);

/**
 * @swagger
 * /api/products:
 *   get:
 *     tags: [Products]
 *     summary: Buscar productos
 *     description: Busca productos en las APIs externas según los criterios especificados
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         description: Término de búsqueda
 *       - in: query
 *         name: store
 *         schema:
 *           type: string
 *         description: Filtrar por tienda específica (opcional)
 *       - in: query
 *         name: minPrice
 *         schema:
 *           type: number
 *         description: Precio mínimo (opcional)
 *       - in: query
 *         name: maxPrice
 *         schema:
 *           type: number
 *         description: Precio máximo (opcional)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Número máximo de productos a devolver
 *     responses:
 *       200:
 *         description: Lista de productos que coinciden con los criterios de búsqueda
 *         content:
 *           application/json:
 *             example:
 *               - id: 1
 *                 name: "Producto Ejemplo"
 *                 description: "Descripción del producto"
 *                 price: 29.99
 *                 priceDiscount: 24.99
 *                 stock: 10
 *                 categoryName: "Categoría"
 *                 brandName: "Marca"
 *                 storeName: "NOMBRE_TIENDA"
 *                 images: []
 */
router.get("/", getProducts);

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     tags: [Products]
 *     summary: Obtener un producto por ID
 *     description: Devuelve los detalles de un producto específico
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del producto
 *       - in: query
 *         name: store
 *         required: true
 *         schema:
 *           type: string
 *         description: Nombre de la tienda
 *     responses:
 *       200:
 *         description: Detalles del producto
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               name: "Producto Ejemplo"
 *               description: "Descripción del producto"
 *               price: 29.99
 *               priceDiscount: 24.99
 *               stock: 10
 *               categoryName: "Categoría"
 *               brandName: "Marca"
 *               storeName: "NOMBRE_TIENDA"
 *               images: []
 *       404:
 *         description: Producto no encontrado
 */
router.get("/:id", getOneProduct);

export default router;
