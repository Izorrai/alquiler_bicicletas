import { Router } from "express";
import controladorMostrarBicicletas from "../controllers/bicicletas/controladorMostrarBicicletas.js"
const router = Router();

router.get("/lista",controladorMostrarBicicletas.getAll);

/* router.get("/nuevo",bicicletaViewController.createForm);

router.get("/:id",bicicletaViewController.getById);

router.post("/nuevo",bicicletaViewController.create);

router.get("/:id/actualizar",bicicletaViewController.updateForm);

router.post("/:id/actualizar",bicicletaViewController.update);

router.post("/:id/borrar",bicicletaViewController.remove); */


export default router;