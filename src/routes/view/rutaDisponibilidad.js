import { Router } from "express";
import controladorMostrarDisponibilidad from "../../controllers/disponibilidad/controladorMostrarDisponibilidad.js"
import  {isAuthenticated} from "../../middlewares/view/authMiddleware.js"
const router = Router();

router.get("/lista", isAuthenticated, controladorMostrarDisponibilidad.mostrarDisponibilidad);




export default router;
