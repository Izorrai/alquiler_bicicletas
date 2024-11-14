import {Router} from "express";
import controlesBicicletas from "../controles/bicicletas/controlesBicicletas.js"
const router = Router();

router.get("/",controlesBicicletas.mostrarTodo);

router.get("/nuevo",controlesBicicletas.crearFormulario);

router.get("/:id",controlesBicicletas.buscarPorId);

router.post("/nuevo",controlesBicicletas.crear);

router.get("/:id/actualizar",controlesBicicletas.actualizarFormulario);

router.post("/:id/actualizar",controlesBicicletas.actualizar);

router.get("/:id/borrar",controlesBicicletas.borrar);


export default router;