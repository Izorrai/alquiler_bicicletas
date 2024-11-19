import controladorUsuario from "../usuarios/controladorUsuario.js";
import { verificarContraseña } from "../../config/bcrypt.js";
// import error from "../../helpers/errors.js"; (hay que importarlos)

async function registro (nombre,apellido,email,telefono,direccion,contraseña,confirmacionContraseña){
    if(contraseña!= confirmacionContraseña){
        throw new Error ("crontaseña erronea") // meterer nuestro error
   
    }
    const usuarioAntiguo = await controladorUsuario.getByEmail(email);
    if(usuarioAntiguo){
        throw new Error ("este email ya existe") // meterer nuestro error
    }
    const nuevoUsuario = await controladorUsuario.create(nombre,apellido,email,telefono,direccion,contraseña);
    return nuevoUsuario;
}

async function login(email,contraseña){
    const usuario= await controladorUsuario.getByEmail(email);
    if(!usuario){
        throw new Error ("Usuario no encontrado") // meter nuestro error 
    }
    const verificada = await verificarContraseña(contraseña,usuario.contraseña);
    if(!verificada){
        throw new Error ("credenciales inválidas") // meterer nuestro error
    }
    return usuario;
}


export default{
    registro,
    login
}