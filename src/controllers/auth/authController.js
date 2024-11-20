import controladorUsuario from "../usuarios/controladorUsuario.js";
import { verificarContraseña } from "../../config/bcrypt.js";
import errors  from "../../helpers/errorUsuarios.js"; 

async function registro (nombre,apellido,email,telefono,direccion,contraseña,confirmacionContraseña){
    if(contraseña!= confirmacionContraseña){
        throw new errors.PASSWORDS_DONT_MATCH();
    }
    const usuarioAntiguo = await controladorUsuario.getByEmail(email);
    if(usuarioAntiguo){
        throw new errors.USER_ALREADY_EXISTS();
    }
    const nuevoUsuario = await controladorUsuario.create(nombre,apellido,email,telefono,direccion,contraseña);
    return nuevoUsuario;
}

async function login(email,contraseña){
    const usuario= await controladorUsuario.getByEmail(email);
    if(!usuario){
        throw new errors.USER_NOT_FOUND(); 
    }
    const verificada = await verificarContraseña(contraseña,usuario.contraseña);
    if(!verificada){
        throw new errors.INVALID_CREDENTIALS();
    }
    return usuario;
}


export default{
    registro,
    login
}