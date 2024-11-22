import { Router } from "express";
import rutaBicicleta from "./rutaBicicleta.js";
import rutaUsuario from "./rutaUsuario.js";
import rutaPago from "./rutaPago.js";
import rutaUbicacion from "./rutaUbicacion.js";
import rutaAlquileres from "./rutaAlquileres.js";
import authApiController from "../../controllers/auth/authApiController.js"

const router = Router();

router.use("/bicicletas", rutaBicicleta);
router.use("/pagos", rutaPago);
router.use("/ubicaciones", rutaUbicacion);
router.use("/usuarios", rutaUsuario);
router.use("/alquileres", rutaAlquileres);

router.post("/login", authApiController.login)
router.post("/register",authApiController.registro);


export default router;
