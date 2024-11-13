import {Router} from "express";
import controlesBicicletas from "../controllers/bicicletas/controlesBicicletas.js"
const router = Router();

router.get("/",controlesBicicletas.mostrarTodo);

router.get("/new",controlesBicicletas.crearFormulario);

router.get("/:id",controlesBicicletas.buscarPorId);

router.post("/new",controlesBicicletas.crear);

router.get("/:id/update",controlesBicicletas.actualizarFormulario);

router.post("/:id/update",controlesBicicletas.actualizar);

router.get("/:id/delete",controlesBicicletas.borrar);


export default router;