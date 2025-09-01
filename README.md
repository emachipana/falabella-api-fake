# 🛒 Proyecto Integración de Múltiples Tiendas (Falabella Fake)

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-4.x-lightgrey?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-6.x-darkgreen?logo=mongodb)
![JWT](https://img.shields.io/badge/JWT-secure-blue?logo=jsonwebtokens)

Este proyecto es una **API desarrollada en Node.js, Express y MongoDB** que integra múltiples tiendas (5 en total, incluyendo una simulación de Falabella) en un solo servicio.  
La aplicación permite **consultar productos por tienda, crear pedidos y reenviarlos automáticamente a cada tienda correspondiente**.  

---

## 🚀 Tecnologías utilizadas
- **Node.js** – Entorno de ejecución para JavaScript.
- **Express.js** – Framework minimalista para manejar rutas y middlewares.
- **MongoDB** – Base de datos NoSQL para la persistencia de productos y pedidos.
- **JWT** – Para autenticación segura con tokens.

---

## ⚙️ Instalación y configuración

1. **Clonar el repositorio**  
   ```bash
   git clone https://github.com/emachipana/falabella-api-fake.git
   cd tu-repositorio
   ```

2. **Configurar variables de entorno**
 - Copia el archivo `.env.example` y renómbralo a `.env`
 - Edita el archivo `.env` con tus valores:
   ```bash
   MONGODB_URI=tu_url_de_mongodb
   PORT=8085
   JWT_SECRET=palabra_secreta
   ```

3. **Instalar dependencias**
   ```bash
   npm install
   ```

5. **Ejecutar el proyecto**
   - Modo desarrollo (con nodemon):
     ```bash
     npm run dev
     ```

   - Modo producción:
     ```bash
     npm start
     ```

---------------------------------------------------

📌 Funcionalidades principales
✅ Integración de 5 tiendas diferentes (ej: Falabella fake)  
✅ Consulta de productos por tienda  
✅ Creación de pedidos centralizada  
✅ Reenvío automático de pedidos a la tienda correspondiente  
✅ Autenticación mediante JWT  
