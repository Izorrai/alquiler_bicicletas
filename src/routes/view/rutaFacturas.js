import { Router } from "express";
import controladorMostrarFacturas from "../../controllers/facturacion/controladorMostrarFacturacion.js"
import { adminOMismoId, isAuthenticated} from "../../middlewares/view/authMiddleware.js"
const router = Router();

router.get("/perfil",controladorMostrarFacturas.mostrarFacturasPerfil);
router.get("/:id",adminOMismoId,controladorMostrarFacturas.mostrarFacturas);





export default router;
