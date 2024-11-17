import { Router } from "express";
import rutaBicicleta from "./rutaBicicleta.js"
import rutaPago from "./rutaPago.js"
import rutaUbicacion from "./rutaUbicacion.js"

const router = Router();

router.use("/bicicletas",rutaBicicleta);
router.use("/pagos",rutaPago);
router.use ("/ubicaciones", rutaUbicacion);

export default router;