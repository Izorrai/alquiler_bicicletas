import { Router } from "express";
import controladorMostrarBicicletas from "../../controllers/bicicletas/controladorMostrarBicicletas.js";
import { adminOMismoId, isAdmin, isAuthenticated } from "../../middlewares/view/authMiddleware.js";

const router = Router();

router.get("/lista",isAuthenticated,controladorMostrarBicicletas.getAll);

router.get("/nueva",isAuthenticated, controladorMostrarBicicletas.crearFormulario);

router.post("/nueva",isAuthenticated,controladorMostrarBicicletas.crear)

router.get("/:id",isAuthenticated, controladorMostrarBicicletas.mostrarPorId);

router.get("/:id/actualizar",isAuthenticated, controladorMostrarBicicletas.actualizarFormBicicleta)

router.post("/:id/actualizar",isAuthenticated, controladorMostrarBicicletas.actualizarBicicleta)

router.post("/:id/eliminar",isAuthenticated, controladorMostrarBicicletas.eliminar)



export default router;