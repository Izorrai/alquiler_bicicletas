# 🚲 BilboBike - Plataforma de Alquiler de Bicicletas en BILBAO

**** es una aplicación web que permite a los usuarios alquilar bicicletas de forma fácil y rápida. Los usuarios pueden explorar diferentes tipos de bicicletas disponibles, seleccionar fechas de alquiler, y reservar sus bicicletas favoritas directamente desde la plataforma.

## 🚀 Características

- **Catálogo de bicicletas**: Explora una amplia variedad de bicicletas (montaña, carretera y eléctricas).
- **Búsqueda avanzada**: Filtra bicicletas por tipo, ubicación y disponibilidad.
- **Historial de pagos/facturas**: Los usuarios pueden ver sus pagos y facturas.


## 🛠️ Tecnologías Utilizadas

- **Frontend**:
  - HTML, CSS, JavaScript

- **Backend**:
  - Node.js
  - Express.js
  - MySQL (Base de datos)
  - MYSQL 2
  - Sequalize
  - Pug
 
  

## ⚙️ Instalación

### Prerrequisitos
- Node.js (v14 o superior)
- MongoDB

### Paso 1: Clonar el repositorio
```bash
git clone https://github.com/Izorrai/alquiler_bicicletas.git
cd bikerent
Paso 2: Instalar dependencias
bash
Copiar código
npm install
Paso 3: Configurar variables de entorno
Crea un archivo .env en la raíz del proyecto y añade las siguientes configuraciones:

env
Copiar código
PORT=3000
MONGODB_URI=mongodb://localhost:27017/bikerent
JWT_SECRET=tu_secreto_jwt

Paso 4: Iniciar la aplicación
bash
Copiar código
npm start
La aplicación estará disponible en http://localhost:3000.

💻 Uso
Regístrate o inicia sesión en la plataforma.
Explora las bicicletas disponibles en el catálogo.
Filtra las bicicletas según tus preferencias.
Selecciona una bicicleta y elige las fechas para el alquiler.
Completa la reserva y realiza el pago.
Recoge la bicicleta en la estación seleccionada y disfruta de tu viaje.


