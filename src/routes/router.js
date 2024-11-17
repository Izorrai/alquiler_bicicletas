import { Router } from "express";
import rutaBicicleta from "./rutaBicicleta.js"
import rutaUsuario from "./rutaUsuario.js"
import rutaPago from "./rutaPago.js"

const router = Router();

router.use("/bicicletas",rutaBicicleta);
router.use("/pagos",rutaPago);

router.use("/usuarios", rutaUsuario)


export default router;