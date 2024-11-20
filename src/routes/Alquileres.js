import { Router } from 'express';
import crearAlquiler  from '../controllers/alquileres/crearAlquiler.js';
import mostrarAlquileres  from '../controllers/alquileres/mostrarAlquileres.js';
import devolverBicicleta  from '../controllers/alquileres/devolverBicicleta.js';

const router = Router();

router.post('/crear', crearAlquiler.crearAlquiler);
router.get('/mostrar', mostrarAlquileres.mostrarAlquileres);
router.post('/devolver', devolverBicicleta.devolverBicicleta);

export default router;