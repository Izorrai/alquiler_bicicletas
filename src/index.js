import express from "express";
import router from "./routes/view/router.js";


const app = express();

app.use(express.static('public'))
app.set('views', 'src/views');
app.set('view engine', 'pug');



app.use(express.urlencoded({ extended: true }));// configurar body parser para recibir datos de formularios
app.use(express.json());// configurar body parser para recibir datos en formato json


app.get("/",(req, res) => {res.render("index", {tittle: 'Inicio', message: "Pagina Alquiler Bicicletas"})});

app.use("/", router)

app.get("/login", (req, res) => {
    res.render("login", {
      title: 'BilboBike'
    });
  });
  
  app.post('/login', (req, res) => {
    const { usuario, contraseña } = req.body;
  
    if (usuario === "miusuario" && contraseña === "micontraseña") {
      res.send("¡Inicio de sesión exitoso!");
    } else {
      res.render("login", {
        title: "Inicio de Sesión",
        error: "Usuario o contraseña incorrectos."
      });
    }
  });


  app.get("/registro", (req, res) => {
    res.render("formregistro", {
      title: 'registro'
    });
  });
  


app.listen(3000, () => console.log("Estamos conectados a la 3000"));