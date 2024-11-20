import { Router } from "express";
import controladorMostrarFacturas from "../../controllers/facturacion/controladorMostrarFacturacion.js"
const router = Router();

router.get("/:id", controladorMostrarFacturas.mostrarFacturas);




export default router;
