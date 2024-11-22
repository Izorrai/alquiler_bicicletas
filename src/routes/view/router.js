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
router.get('/index',isAuthenticated ,(req, res) => {

    const nombre = req.session.user.nombre
    const apellido = req.session.user.apellido
    const usuario_id = req.session.user.usuario_id
    

    res.render('/index',{nombre,apellido,usuario_id})
});

router.use("/bicicletas",isAuthenticated, rutaBicicleta);
router.use("/pagos",adminOMismoId, rutaPago); //OK
router.use("/ubicaciones", isAuthenticated, rutaUbicacion);
router.use("/usuarios", rutaUsuario);
router.use("/alquileres", isAuthenticated, rutaAlquileres); //OK
router.use("/", authRouter); //OK
router.use("/facturas", rutaFacturas);
router.use("/disponibilidad", rutaDisponibilidad);

export default router;
