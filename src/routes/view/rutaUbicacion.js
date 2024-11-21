import { Router } from "express";
import controladorMostrarUbicaciones from "../../controllers/ubicaciones/controladorMostrarUbicaciones.js";
import {isAuthenticated} from "../../middlewares/view/authMiddleware.js";
const router = Router();

router.get("/lista",isAuthenticated, controladorMostrarUbicaciones.getAll);
router.get("/nueva",controladorMostrarUbicaciones.crearFormulario);
router.post("/nueva",controladorMostrarUbicaciones.crear)
router.get("/:id",controladorMostrarUbicaciones.mostrarPorId);
router.get("/:id/actualizar",controladorMostrarUbicaciones.actualizarFormUbicacion);
router.post("/:id/actualizar",controladorMostrarUbicaciones.actualizarUbicacion);
router.post("/:id/eliminar",controladorMostrarUbicaciones.eliminar);



export default router;