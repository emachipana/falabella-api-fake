import { Router } from "express";
import { createOrder, getOneByStore, getOrderByUser, getOrders } from "../controllers/orders.controller.js";
import { checkToken } from "../middlewares/auth.js";

const router = Router();

/**
 * @swagger
 * /api/orders:
 *   post:
 *     tags: [Orders]
 *     summary: Crear un nuevo pedido
 *     description: Crea un nuevo pedido con los productos especificados
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - products
 *             properties:
 *               products:
 *                 type: array
 *                 items:
 *                   type: object
 *                   required:
 *                     - productId
 *                     - storeName
 *                     - quantity
 *                   properties:
 *                     productId:
 *                       type: string
 *                       description: ID del producto
 *                     storeName:
 *                       type: string
 *                       description: Nombre de la tienda
 *                     quantity:
 *                       type: integer
 *                       minimum: 1
 *                       description: Cantidad del producto
 *     responses:
 *       201:
 *         description: Pedido creado exitosamente
 *         content:
 *           application/json:
 *             example:
 *               id: "68b3d45cf9eb27f4f29d69c2"
 *               userId: "68b3ca3b0146da169c3bc3a3"
 *               orders:
 *                 - orderId: "4"
 *                   storeName: "INVERSIONES_ARAUJO"
 *                   _id: "68b3d45cf9eb27f4f29d69c3"
 *                 - orderId: "11"
 *                   storeName: "Fibertel"
 *                   _id: "68b3d45cf9eb27f4f29d69c4"
 *               createdAt: "2025-08-31T04:49:32.688Z"
 *               updatedAt: "2025-08-31T04:49:32.688Z"
 *       401:
 *         description: No autorizado (token inválido o expirado)
 */
router.post("/", [checkToken], createOrder);

/**
 * @swagger
 * /api/orders/admin:
 *   get:
 *     tags: [Orders]
 *     summary: Obtener todos los pedidos (Admin)
 *     description: Devuelve una lista de todos los pedidos del sistema (solo para administradores)
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de pedidos
 *         content:
 *           application/json:
 *             example:
 *               - id: "68b3d45cf9eb27f4f29d69c2"
 *                 userId: "68b3ca3b0146da169c3bc3a3"
 *                 orders:
 *                   - orderId: "4"
 *                     storeName: "INVERSIONES_ARAUJO"
 *                     _id: "68b3d45cf9eb27f4f29d69c3"
 *                   - orderId: "11"
 *                     storeName: "Fibertel"
 *                     _id: "68b3d45cf9eb27f4f29d69c4"
 *                 createdAt: "2025-08-31T04:49:32.688Z"
 *                 updatedAt: "2025-08-31T04:49:32.688Z"
 */
router.get("/admin", getOrders);

/**
 * @swagger
 * /api/orders:
 *   get:
 *     tags: [Orders]
 *     summary: Obtener pedidos del usuario
 *     description: Devuelve los pedidos del usuario autenticado
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de pedidos del usuario
 *         content:
 *           application/json:
 *             example:
 *               - id: "68b3d45cf9eb27f4f29d69c2"
 *                 userId: "68b3ca3b0146da169c3bc3a3"
 *                 orders:
 *                   - orderId: "4"
 *                     storeName: "INVERSIONES_ARAUJO"
 *                     _id: "68b3d45cf9eb27f4f29d69c3"
 *                   - orderId: "11"
 *                     storeName: "Fibertel"
 *                     _id: "68b3d45cf9eb27f4f29d69c4"
 *                 createdAt: "2025-08-31T04:49:32.688Z"
 *                 updatedAt: "2025-08-31T04:49:32.688Z"
 */
router.get("/", [checkToken], getOrderByUser);

/**
 * @swagger
 * /api/orders/{store}/{orderId}:
 *   get:
 *     tags: [Orders]
 *     summary: Obtener un pedido por tienda e ID
 *     description: Devuelve los detalles de un pedido específico por el nombre de la tienda y el ID del pedido
 *     parameters:
 *       - in: path
 *         name: store
 *         required: true
 *         schema:
 *           type: string
 *         description: Nombre de la tienda
 *       - in: path
 *         name: orderId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del pedido
 *     responses:
 *       200:
 *         description: Detalles del pedido
 *         content:
 *           application/json:
 *             example:
 *               id: 1
 *               total: 114.95
 *               subTotal: 97.42
 *               state: "Pendiente"
 *               date: "2025-08-31T22:24:50.7155592"
 *               orderDetails:
 *                 - id: 1
 *                   productName: "Correa Ajustable para Perros"
 *                   price: 39.6
 *                   quantity: 2
 *                   subtotal: 67.12
 *                   total: 79.2
 *                   saleId: 1
 *                   productId: 4
 *                 - id: 2
 *                   productName: "Shampoo Pet Care Antipulgas para Gatos"
 *                   price: 35.75
 *                   quantity: 1
 *                   subtotal: 30.3
 *                   total: 35.75
 *                   saleId: 1
 *                   productId: 3
 *       404:
 *         description: Pedido no encontrado
 */
router.get("/:store/:orderId", getOneByStore);

export default router;
