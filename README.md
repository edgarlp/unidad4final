TP Integrador – Aplicaciones Web II

Este proyecto integra todas las unidades desarrolladas durante la cursada de Aplicaciones Web II. 
Consiste en un sistema web completo con autenticación, manejo de productos, carrito de compras y conexión con MongoDB.

Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express
Base de datos: MongoDB

---------------------------------------------

Inicio de Sesión:
email: laura@mail.com
contraseña: 123456

---

### Carga inicial de la base de datos

El proyecto incluye un script llamado `carga-inicial.js` que permite insertar automáticamente un usuario y algunos productos de ejemplo en la base de datos MongoDB.

### Ruta del archivo:  
`backend/data/carga-inicial.js`

#### ¿Qué datos se cargan?

- Un usuario:
  - **Email:** `laura@mail.com`
  - **Contraseña:** `123456` (encriptada)
- Tres productos:
  - `Notebook HP`
  - `Mouse Logitech`
  - `Monitor Samsung 24"`
