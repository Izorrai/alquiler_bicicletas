import {Router} from "express";
import controladorBicis from "../controllers/bike/controladorBicis.js"
const router = Router();

router.get("/",controladorBicis.getAll);

router.get("/new",controladorBicis.createForm);

router.get("/:id",controladorBicis.getById);

router.post("/new",controladorBicis.create);

router.get("/:id/update",controladorBicis.updateForm);

router.post("/:id/update",controladorBicis.update);

router.get("/:id/delete",controladorBicis.remove);


export default router;