import {Router} from "express";
import bicicletaViewController from "../controllers/bike/"
const router = Router();

router.get("/",bicicletaViewController.getAll);

router.get("/new",bicicletaViewController.createForm);

router.get("/:id",bicicletaViewController.getById);

router.post("/new",bicicletaViewController.create);

router.get("/:id/update",bicicletaViewController.updateForm);

router.post("/:id/update",bicicletaViewController.update);

router.post("/:id/delete",bicicletaViewController.remove);


export default router;