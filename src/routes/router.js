import { Router } from "express";
import rutaBicicleta from "./rutaBicicleta.js"
import rutaPago from "./rutaPago.js"

const router = Router();

router.use("/bicicletas",rutaBicicleta);
router.use("/pagos",rutaPago);


export default router;