import { Router } from "express";
import controladorMostrarBicicletas from "../../controllers/bicicletas/controladorMostrarBicicletas.js";
const router = Router();

router.get("/lista",controladorMostrarBicicletas.getAll);
router.get("/nueva",controladorMostrarBicicletas.crearFormulario); // meter isAdmin
router.post("/nueva",controladorMostrarBicicletas.crear) // meter isAdmin
router.get("/:id",controladorMostrarBicicletas.mostrarPorId);
router.get("/:id/actualizar",controladorMostrarBicicletas.actualizarFormBicicleta) // meter isAdmin 
router.post("/:id/actualizar",controladorMostrarBicicletas.actualizarBicicleta) // meter isAdmin 
router.post("/:id/eliminar",controladorMostrarBicicletas.eliminar) // meter isAdmin 



export default router;