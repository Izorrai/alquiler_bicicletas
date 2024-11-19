import { Router } from "express";
import controladorMostrarPagos from "../../controllers/pagos/controladorMostrarPago.js";
const router = Router();

router.get("/lista",controladorMostrarPagos.getAll);
router.get("/nuevo",controladorMostrarPagos.crearFormulario);
router.post("/nuevo",controladorMostrarPagos.crear)
router.get("/:id",controladorMostrarPagos.mostrarPorId);
router.get("/:id/actualizar",controladorMostrarPagos.actualizarFormPago)
router.post("/:id/actualizar",controladorMostrarPagos.actualizarPago);
router.post("/:id/eliminar",controladorMostrarPagos.eliminar)



export default router;