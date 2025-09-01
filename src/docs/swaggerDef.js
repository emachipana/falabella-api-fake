/**
 * Configuración básica de Swagger para la API de Falabella
 */

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'Falabella API',
    version: '1.0.0',
    description: 'Documentación de la API de Falabella Fake',
    contact: {
      name: 'Soporte API',
      email: 'soporte@falabella.com',
    },
  },
  servers: [
    {
      url: process.env.API_URL || 'http://localhost:8085',
      description: 'Servidor de desarrollo',
    },
    {
      url: 'https://api.falabellafake.com',
      description: 'Producción',
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
};

export default swaggerDef;
