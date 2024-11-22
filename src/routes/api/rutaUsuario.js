import {Router} from "express";
import controladorApiUsuarios from "../../controllers/usuarios/controladorApiUsuarios.js";
const router = Router();


router.get("/lista",controladorApiUsuarios.getAllUsuarios);

router.get("/:id",controladorApiUsuarios.buscarUsuarioPorId);

router.post("/nuevo",controladorApiUsuarios.crearUsuario);

router.put("/:id/actualizar",controladorApiUsuarios.actualizarUsuario);

router.delete("/:id", controladorApiUsuarios.eliminarUsuario);

export default router;
