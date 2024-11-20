import { Router } from "express";
import rutaBicicleta from "./rutaBicicleta.js";
import rutaUsuario from "./rutaUsuario.js";
import rutaPago from "./rutaPago.js";
import rutaUbicacion from "./rutaUbicacion.js";
import rutaAlquileres from "./rutaAlquileres.js";
import rutaFacturas from "./rutaFacturas.js";
import rutaDisponibilidad from "./rutaDisponibilidad.js"

const router = Router();

router.use("/bicicletas", rutaBicicleta);
router.use("/pagos", rutaPago);
router.use("/ubicaciones", rutaUbicacion);
router.use("/usuarios", rutaUsuario);
router.use("/alquileres", rutaAlquileres);
router.use("/facturas", rutaFacturas);
router.use("/disponibilidad", rutaDisponibilidad);

export default router;
