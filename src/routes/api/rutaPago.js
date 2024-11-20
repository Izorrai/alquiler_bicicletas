import { Router } from "express";
import controladorApiPagos from "../../controllers/pagos/controladorApiPagos.js";
const router = Router();

router.get("/lista",controladorApiPagos.getAllPagos);
router.get("/:id",controladorApiPagos.buscarPorId);
router.post("/nuevo",controladorApiPagos.crearPago)
router.put("/:id/actualizar",controladorApiPagos.actualizarPago);
router.delete("/:id",controladorApiPagos.eliminarPago)



export default router;