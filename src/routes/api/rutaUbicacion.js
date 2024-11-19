import { Router } from "express";
import controladorApiUbicaciones from "../../controllers/ubicaciones/controladorApiUbicaciones.js";
const router = Router();

router.get("/lista",controladorApiUbicaciones.getAllUbicaciones);
router.get("/:id",controladorApiUbicaciones.buscarUbicacionPorId);
router.post("/nueva",controladorApiUbicaciones.crearUbicacion)
router.put("/:id/actualizar",controladorApiUbicaciones.actualizarUbicacion);
router.delete("/:id",controladorApiUbicaciones.eliminarUbicacion);



export default router;