import express from "express";
import cors from "cors";
import categoriesRoutes from "../src/routes/categories.routes.js";
import productsRoutes from "../src/routes/products.routes.js";
import ordersRoutes from "../src/routes/orders.routes.js";
import authRoutes from "../src/routes/auth.routes.js";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const app = express();


// Configuración de Swagger
import swaggerDef from './docs/swaggerDef.js';

const swaggerOptions = {
  definition: swaggerDef,
  apis: ['./src/routes/*.js'] // Solo cargar rutas, no modelos
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
// Configuración de Swagger UI
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocs, {
    explorer: true,
    customSiteTitle: "Falabella API Documentation",
    customCss: '.swagger-ui .topbar { display: none }',
    customfavIcon: 'https://www.falabella.com/favicon.ico',
    swaggerOptions: {
      docExpansion: 'list',
      filter: true,
      showRequestDuration: true,
    }
  })
);

// Ruta raíz redirige a la documentación
app.get('/', (req, res) => {
  res.redirect('/api-docs');
});

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use("/api/categories", categoriesRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/orders", ordersRoutes);
app.use("/api/auth", authRoutes);

export default app;
