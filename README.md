
# 🚲 **BilboBike** - Plataforma de Alquiler de Bicicletas en Bilbao  


BilboBike es una aplicación web diseñada para facilitar el alquiler de bicicletas en la ciudad de Bilbao. Los usuarios pueden explorar un catálogo diverso de bicicletas, filtrar según sus preferencias, y realizar reservas de manera rápida y segura.

---

## 🌟 **Características**
- **Catálogo de bicicletas:** Explora una amplia variedad de bicicletas (montaña, carretera y eléctricas).  
- **Búsqueda avanzada:** Filtra bicicletas por tipo, ubicación y disponibilidad.  autenticación
- **Reservas en línea:** Realiza reservas y pagos de forma segura a través de la plataforma.  
- **Historial de alquileres:** Revisa todas tus reservas anteriores.  
- **Mapa de ubicaciones:** Encuentra las estaciones de bicicletas más cercanas utilizando Google Maps.  

---

## 🛠️ **Tecnologías Utilizadas**
### **Frontend:**
- CSS  
- pug

### **Backend:**
- javascript  
- Node.js    
- Express.js  
- MySQL (Base de datos)  

## ⚙️ **Instalación**

### **Prerrequisitos**
- **Node.js** (v14 o superior)  
- **MySQL**  

### **Paso 1: Clonar el repositorio**
```bash
git clone https://github.com/Izorrai/alquiler_bicicletas.git
```

### **Paso 2: Instalar dependencias**
```bash
npm install
```

### **Paso 3: Configurar variables de entorno**  
Crea un archivo `.env` en la raíz del proyecto y añade las siguientes configuraciones:
```env
# Configuración de la base de datos
DB_HOST=alquiler_bicicletas_db          # Dirección del servidor de la base de datos
DB_PORT=3308                            # Puerto del servidor de la base de datos
DB_USER=usuario                         # Usuario estándar con acceso a la base de datos
DB_PASSWORD=1234                        # Contraseña del usuario
DB_DATABASE=alquiler_bicicletas         # Nombre de la base de datos
DB_DIALECT: mysql             

# Configuración de las sesiones
SESSION_SECRET=Bicicletas_24mysql1234

```

### **Paso 4: Inicializar la base de datos**
Asegúrate de que tu servidor MySQL esté ejecutándose. Importa el esquema de base de datos desde el archivo `database/schema.sql`.

### **Paso 5: Iniciar la aplicación**
```bash
npm start
```
La aplicación estará disponible en [http://localhost:3001](http://localhost:3001).

---

## 💻 **Uso**
1. Regístrate o inicia sesión en la plataforma.  
2. Explora las bicicletas disponibles en el catálogo.  
3. Filtra las bicicletas según la ubicación.  
4. Selecciona una bicicleta y elige las fechas para el alquiler.  
5. Completa la reserva desde el lugar.  
6. Recoge la bicicleta en la estación seleccionada y ¡disfruta de tu viaje!  

---

## 📦 **Estructura del Proyecto**
```plaintext
alquiler_bicicletas/
├── database/           # Archivos relacionados con la base de datos (esquemas, migraciones)
    ├── conf/               # Configuraciones generales de la aplicación
    ├── script/             # Scripts de los schemas e inserts de la base de datos
├── node_modules/       # Dependencias del proyecto (autogenerado por npm)
├── public/             # Archivos estáticos (CSS, JavaScript, imágenes)
├── src/
│   ├── config/         # Archivos de configuración específicos (env, settings)
│   ├── controllers/    # Lógica de negocio de las rutas
│   ├── helpers/        # Funciones auxiliares o utilidades comunes
│   ├── middlewares/    # Middlewares personalizados para validaciones y otros procesos
│   ├── models/         # Modelos y consultas a la base de datos
│   ├── routes/         # Definición de las rutas
│   │   ├── api/        # Rutas específicas para la API
│   │   ├── view/       # Rutas relacionadas con vistas web
│   │   └── router.js   # Archivo principal de rutas
│   ├── utils/          # Funciones o herramientas de uso general
│   └── views/          # Plantillas para renderizar vistas (HTML, EJS, etc.)
│   ├──index.js         # Archivo principal para vistas
├── .env                # Configuraciones de entorno
├── .env.example        # Ejemplo de archivo de entorno para desarrollo
├── .gitignore          # Archivos y carpetas ignoradas por Git
├── docker-compose.yml  # Configuración de Docker Compose
├── dockerfile          # Configuración de Docker
├── package.json        # Dependencias y configuración del proyecto
├── package-lock.json   # Archivo de bloqueo de dependencias
└── README.md           # Documentación del proyecto

```

---

## 🛡️ **Seguridad**
- **Autenticación:** Sistema de inicio de sesión y registro mediante Express sessions.  
- **Validación:** Sanitización y validación de datos del usuario para evitar inyecciones de código.  

---

## 🌐 **Contribuciones**
¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar la plataforma o quieres reportar un problema, sigue estos pasos:  
1. Haz un fork del repositorio.  
2. Crea una nueva rama para tu función o arreglo (`git checkout -b mi-rama`).  
3. Realiza tus cambios y haz commit (`git commit -m "Mi mejora"`)  
4. Envía un Pull Request.  

---



<div align="center">
    <h3>¡Gracias por usar BilboBike! 🚴‍♂️🌍</h3>
</div> 
