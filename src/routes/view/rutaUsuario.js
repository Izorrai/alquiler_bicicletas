import {Router} from "express";
import controladorMostrarUsuarios from "../../controllers/usuarios/controladorMostrarUsuarios.js";
const router = Router();


router.get("/lista",controladorMostrarUsuarios.getAllUsers);
router.get("/nuevo",controladorMostrarUsuarios.crearFormularioUsuario);
router.post("/nuevo",controladorMostrarUsuarios.crearUsuario);
router.get("/:id",controladorMostrarUsuarios.mostrarUsuarioPorId);
router.get("/:id/actualizar",controladorMostrarUsuarios.actualizarUsuario);
router.post("/:id/eliminar", controladorMostrarUsuarios.elimimnarUsuario);

export default router;
