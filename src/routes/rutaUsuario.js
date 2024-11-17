import {Router} from "express";
import controladorMostrarUsuarios from "../controllers/usuarios/controladorMostrarUsuarios.js";
const router = Router();


router.get("/lista",controladorMostrarUsuarios.getAllUsers);
router.get("/nueva",controladorMostrarUsuarios.crearFormularioUsuario);
router.post("/nueva",controladorMostrarUsuarios.crearUsuario);
router.get("/:id",controladorMostrarUsuarios.mostrarUsuarioPorId);
router.get("/:id/actualizar",controladorMostrarUsuarios.actualizarUsuario);
router.post("/:id/eliminar", controladorMostrarUsuarios.elimimnarUsuario);

export default router;
