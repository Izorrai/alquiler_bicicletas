import { Router } from "express";
import rutaBicicleta from "./rutaBicicleta.js";
import rutaUsuario from "./rutaUsuario.js";
import rutaPago from "./rutaPago.js";
import rutaUbicacion from "./rutaUbicacion.js";
import rutaAlquileres from "./rutaAlquileres.js";
import authRouter from "./authRouter.js";
import rutaFacturas from "./rutaFacturas.js";
import rutaDisponibilidad from "./rutaDisponibilidad.js"
import { adminOMismoId, isAdmin, isAuthenticated } from "../../middlewares/view/authMiddleware.js";

const router = Router();
router.get('/', (req, res) => {
    const {message,messageType}=req.query;
    console.log("message",message,messageType)
    res.render('index',{message,messageType})
});

router.use("/bicicletas",isAuthenticated, rutaBicicleta);
router.use("/pagos",adminOMismoId, rutaPago); //OK
router.use("/ubicaciones", isAuthenticated, rutaUbicacion);
router.use("/usuarios", rutaUsuario);
router.use("/alquileres", isAdmin, rutaAlquileres); //OK
router.use("/", authRouter); //OK
router.use("/facturas", rutaFacturas);
router.use("/disponibilidad", rutaDisponibilidad);

export default router;
