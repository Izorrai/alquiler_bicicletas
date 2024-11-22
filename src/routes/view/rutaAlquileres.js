import { Router } from "express";
import controladorMostrarAlquileres  from "../../controllers/alquileres/controladorMostrarAlquileres.js";
import controladorInformacionAlquiler  from "../../controllers/alquileres/controladorInformacionAlquiler.js";
import controladorAlquiler  from "../../controllers/alquileres/controladorAlquiler.js";
import devolucionBicicleta  from "../../controllers/alquileres/devolverBicicleta.js";

const router = Router();

router.get("/lista", controladorMostrarAlquileres.getAllAlquileres);
router.get("/nuevo", controladorMostrarAlquileres.crearFormularioAlquiler);
router.get("/informacion/:bicicleta_id/:ubicacion_id", controladorInformacionAlquiler.mostrarInformacionAlquiler);
router.post("/crear", controladorAlquiler.crearAlquiler);
router.get("/devolver/:id", devolucionBicicleta.devolverBicicleta);
router.get("/activos/perfil", controladorMostrarAlquileres.mostrarAlquileresActivos);
router.get("/activos/:usuario_id", controladorMostrarAlquileres.mostrarAlquileresActivos);



router.get("/activos", controladorMostrarAlquileres.mostrarAlquileresActivos);
router.post("/devolver", devolucionBicicleta.devolverBicicleta);


router.get("/:id", controladorMostrarAlquileres.mostrarAlquilerPorId);
router.get("/:id/actualizar", controladorMostrarAlquileres.actualizarFormularioAlquiler);
router.post("/:id/actualizar", controladorMostrarAlquileres.actualizarAlquiler);
router.post("/:id/eliminar", controladorMostrarAlquileres.eliminarAlquiler);

export default router;