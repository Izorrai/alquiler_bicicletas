import { Router } from "express";
import rutaBicicleta from "./rutaBicicleta.js"

const router = Router();

router.use("/bicicletas",rutaBicicleta);


export default router;