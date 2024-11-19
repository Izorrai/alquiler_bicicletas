import { Router } from "express";
import rutaBicicleta from "./rutaBicicleta.js";
import rutaUsuario from "./rutaUsuario.js";
import rutaPago from "./rutaPago.js";
import rutaUbicacion from "./rutaUbicacion.js";
import rutaAlquileres from "./rutaAlquileres.js";
import {isAuthenticated} from "../../middlewares/view/authMiddleware.js"
const router = Router();

router.use("/bicicletas", rutaBicicleta);
router.use("/pagos", rutaPago); // meter isAuthenticated
router.use("/ubicaciones", rutaUbicacion);
router.use("/usuarios", rutaUsuario);
router.use("/alquileres", rutaAlquileres);

export default router;
