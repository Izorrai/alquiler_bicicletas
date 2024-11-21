import {Router} from "express";
import controladorMostrarUsuarios from "../../controllers/usuarios/controladorMostrarUsuarios.js";
import { isAdmin, adminOMismoId } from "../../middlewares/view/authMiddleware.js";
const router = Router();


router.get("/lista", isAdmin, controladorMostrarUsuarios.getAllUsers);
router.get("/nuevo", isAdmin, controladorMostrarUsuarios.crearFormularioUsuario);
router.post("/nuevo",isAdmin, controladorMostrarUsuarios.crearUsuario);
router.get("/:id",adminOMismoId, controladorMostrarUsuarios.mostrarUsuarioPorId);
router.post("/:id/actualizar",isAdmin, controladorMostrarUsuarios.actualizarUsuario);

router.get("/:id/actualizar",isAdmin, controladorMostrarUsuarios.actualizarFormUsuario);

router.post("/:id/eliminar",isAdmin, controladorMostrarUsuarios.elimimnarUsuario);

export default router;
