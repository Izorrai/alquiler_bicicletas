import { Router } from "express";
import controladorMostrarBicicletas from "../../controllers/bicicletas/controladorMostrarBicicletas.js";
const router = Router();

router.get("/lista",controladorMostrarBicicletas.getAll);
router.get("/nueva",controladorMostrarBicicletas.crearFormulario);
router.post("/nueva",controladorMostrarBicicletas.crear)
router.get("/:id",controladorMostrarBicicletas.mostrarPorId);
router.get("/:id/actualizar",controladorMostrarBicicletas.actualizarFormBicicleta)
router.post("/:id/actualizar",controladorMostrarBicicletas.actualizarBicicleta)
router.post("/:id/eliminar",controladorMostrarBicicletas.eliminar)



export default router;