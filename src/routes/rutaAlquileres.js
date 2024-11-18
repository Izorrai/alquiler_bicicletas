import { Router } from "express";
import controladorMostrarAlquileres from "../controllers/alquileres/controladorMostrarAlquileres.js"

const router = Router();

router.get("/lista", controladorMostrarAlquileres.getAllAlquileres);

router.get("/nuevo", controladorMostrarAlquileres.crearFormularioAlquiler);

router.post("/nuevo", controladorMostrarAlquileres.crearAlquiler);

router.get("/:id", controladorMostrarAlquileres.mostrarAlquilerPorId);

router.get("/:id/actualizar", controladorMostrarAlquileres.actualizarFormularioAlquiler);

router.post("/:id/actualizar", controladorMostrarAlquileres.actualizarAlquiler);

router.post("/:id/eliminar", controladorMostrarAlquileres.eliminarAlquiler);


export default router;
