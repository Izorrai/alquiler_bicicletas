import { Router } from "express";
import controladorApiAlquileres from "../../controllers/alquileres/controladorApiAlquileres.js";
const router = Router();

router.get("/lista", controladorApiAlquileres.getAllAlquileres);

router.get("/:id", controladorApiAlquileres.buscarAlquilerPorId);

router.post("/nuevo", controladorApiAlquileres.crearAlquiler);

router.put("/:id/actualizar", controladorApiAlquileres.actualizarAlquiler);

router.delete("/:id", controladorApiAlquileres.eliminarAlquiler);


export default router;
