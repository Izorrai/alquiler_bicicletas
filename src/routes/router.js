import { Router } from "express";
import rutaBicicleta from "./rutaBicicleta.js"
import rutaUsuario from "./rutaUsuario.js"
import rutaPago from "./rutaPago.js"
<<<<<<< HEAD
import rutaUbicacion from "./rutaUbicacion.js"

=======
import rutaAlquileres from "./rutaAlquileres.js";
>>>>>>> dev
const router = Router();

router.use("/bicicletas",rutaBicicleta);
router.use("/pagos",rutaPago);
<<<<<<< HEAD
router.use ("/ubicaciones", rutaUbicacion);
=======
>>>>>>> dev
router.use("/usuarios", rutaUsuario)
router.use("/alquileres", rutaAlquileres);


export default router;