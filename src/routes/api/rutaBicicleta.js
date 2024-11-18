import { Router } from "express";
import controladorApiBicicletas from "../../controllers/bicicletas/controladorApiBicicletas.js";
const router = Router();

router.get("/lista",controladorApiBicicletas.getAllBicicletas);
router.get("/:id",controladorApiBicicletas.buscarPorId);
router.post("/nueva",controladorApiBicicletas.crearBicicleta);
router.put("/:id/actualizar",controladorApiBicicletas.actualizarBicicleta);
router.delete("/:id/",controladorApiBicicletas.eliminarBicicleta);



export default router;