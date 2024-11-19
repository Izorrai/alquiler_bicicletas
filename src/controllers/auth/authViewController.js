import authController from "./authController";

async function registro(req, res) {
    try {
        const { nombre, apellido, email, telefono, contraseña, contraseñaConfirmada } = req.body;
        const resultado = await authController.registro( nombre, apellido, email, telefono, contraseña, contraseñaConfirmada);
        res.redirect("/login?message=usuario registrado correctamente&messageType=success");
    } catch (error) {
        console.error(error);
        const url=`/register?message=${error.message}&messageType=error`
        res.redirect(url);
    }
}

function formularioLogin(req,res){
    const {message,messageType}=req.query;
    res.render("auth/login",{message,messageType})
}

function formularioRegistro(req,res){
    const {message,messageType}=req.query;
    res.render("auth/register",{message,messageType});
}

async function login(req, res) {
    try {
        const { email, contraseña } = req.body;
        const user = await authController.login(email, contraseña);
        req.session.user={
            email:usuario.email,
            user_id:usuario.usuario_id,
            role:usuario.role
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
    req.session.usuario =null;
    res.redirect("/");
}
export default {
    registro,
    login,
    logout,
    formularioLogin,
    formularioRegistro
}