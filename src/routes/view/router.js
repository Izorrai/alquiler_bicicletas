import { Router } from "express";
import rutaBicicleta from "./rutaBicicleta.js";
import rutaUsuario from "./rutaUsuario.js";
import rutaPago from "./rutaPago.js";
import rutaUbicacion from "./rutaUbicacion.js";
import rutaAlquileres from "./rutaAlquileres.js";
import authRouter from "./authRouter.js";

//import {isAuthenticated} from "../../middlewares/view/authMiddleware.js"
import rutaFacturas from "./rutaFacturas.js";
import rutaDisponibilidad from "./rutaDisponibilidad.js"

const router = Router();
router.get('/', (req, res) => {
    const {message,messageType}=req.query;
    console.log("message",message,messageType)
    res.render('index',{message,messageType})
});

router.use("/bicicletas", rutaBicicleta);
router.use("/pagos", rutaPago); // meter isAuthenticated
router.use("/ubicaciones", rutaUbicacion);
router.use("/usuarios", rutaUsuario);
router.use("/alquileres", rutaAlquileres);
router.use("/", authRouter);
router.use("/facturas", rutaFacturas);
router.use("/disponibilidad", rutaDisponibilidad);

export default router;
