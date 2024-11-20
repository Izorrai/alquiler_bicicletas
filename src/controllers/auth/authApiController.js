import authController from "./authController.js";

async function registro(req, res) {
    try {
        const { nombre, apellido, email, telefono, contraseña, contraseñaConfirmada } = req.body;
        const result = await authController.registro(nombre, apellido, email, telefono, contraseña, contraseñaConfirmada);
        res.json(result);
    } catch (error) {
        console.error(error);
        if (error.status) {
            res.status(error.status);
        } else {
            res.status(500);
        }
        res.json({ error: error.message });
    }
}

async function login(req, res) {
    try {
        const { email, contraseña } = req.body;
        const usuario = await authController.login(email, contraseña);
        const token = jwt.sign({usuario_id:usuario.usuario_id,role:usuario.role});
        res.json({token});
    } catch (error) {
        console.error(error);
        if (error.status) {
            res.status(error.status);
        } else {
            res.status(500);
        }
        res.json({ error: error.message });
    }

}

export default {
    registro,
    login
}