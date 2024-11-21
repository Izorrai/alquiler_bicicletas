import session from "express-session";
import authController from "./authController.js"
async function registro(req, res) {
    try {
        const { nombre, apellido, email, telefono, direccion, contrasena, contrasenaConfirmada } = req.body;
        const resultado = await authController.registro( nombre, apellido, email, telefono, direccion, contrasena, contrasenaConfirmada);
        res.redirect("/login?message=usuario registrado correctamente&messageType=success");
    } catch (error) {
        console.error(error);
        const url=`/registro?message=${error.message}&messageType=error`
        res.redirect(url);
    }
}

function formularioLogin(req,res){
    const {message,messageType}=req.query;
    res.render("login",{message,messageType})
}

function formularioRegistro(req,res){
    const {message,messageType}=req.query;
    res.render("formregistro",{message,messageType});
    
}


async function login(req, res) {
    try {
        const { email, contrasena } = req.body;
        const usuario = await authController.login(email, contrasena);
        req.session.user={
            email:usuario.email,
            usuario_id:usuario.usuario_id,
            roles:usuario.roles,
            nombre:usuario.nombre,
            apellido: usuario.apellido,
    

        }
        const url=(`/?message=sesión iniciada correctamente&messageType=success`)
        res.redirect(url);
    } catch (error) {
        console.error(error);
        const url=`/login?message=${error.message}&messageType=error`
        res.redirect(url);
    }

}
function logout(req,res){
    req.session.user =null;
    res.redirect("/login");
}
export default {
    registro,
    login,
    logout,
    formularioLogin,
    formularioRegistro
}