import { Router } from "express";
import controladorMostrarDisponibilidad from "../../controllers/disponibilidad/controladorMostrarDisponibilidad.js";

const router = Router();

router.get("/lista", controladorMostrarDisponibilidad.mostrarDisponibilidad);

export default router;