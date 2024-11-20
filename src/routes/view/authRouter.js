import { Router } from "express";
import authViewController from "../../controllers/auth/authViewController.js";

const router = Router();

router.get("/login",authViewController.formularioLogin);
router.get("/registro",authViewController.formularioRegistro);
router.post("/login",authViewController.login);
router.post("/registro",authViewController.registro);
router.get("/logout",authViewController.logout);

export default router;