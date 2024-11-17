import { Router } from "express";
import rutaBicicleta from "./rutaBicicleta.js"
import rutaUsuario from "./rutaUsuario.js"

const router = Router();

router.use("/bicicletas",rutaBicicleta);

router.use("/usuarios", rutaUsuario)


export default router;