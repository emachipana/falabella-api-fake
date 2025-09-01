import { Router } from "express";
import { login, register } from "../controllers/auth.controller.js";

const router = Router();

router.use((_req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, Origin, Content-Type, Accept"
  );
  next();
});

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     tags: [Auth]
 *     summary: Iniciar sesión de usuario
 *     description: Autentica al usuario y devuelve un token JWT
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 description: Nombre de usuario
 *               password:
 *                 type: string
 *                 description: Contraseña del usuario
 *     responses:
 *       200:
 *         description: Autenticación exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   description: Nombre del usuario
 *                 last_name:
 *                   type: string
 *                   description: Apellido del usuario
 *                 username:
 *                   type: string
 *                   description: Nombre de usuario
 *                 token:
 *                   type: string
 *                   description: Token JWT para autenticación
 */
router.post("/login", login);

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     tags: [Auth]
 *     summary: Registrar un nuevo usuario
 *     description: Crea una nueva cuenta de usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - last_name
 *               - username
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nombre del usuario
 *               last_name:
 *                 type: string
 *                 description: Apellido del usuario
 *               username:
 *                 type: string
 *                 description: Nombre de usuario
 *               password:
 *                 type: string
 *                 description: Contraseña del usuario
 *     responses:
 *       201:
 *         description: Usuario registrado exitosamente
 *         content:
 *           application/json:
 *             example:
 *               name: "Juan"
 *               last_name: "Pérez"
 *               username: "juanperez"
 *               token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 */
router.post("/register", register);

export default router;
