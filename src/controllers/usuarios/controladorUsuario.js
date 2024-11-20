import { hashContraseña } from "../../config/bcryct.js";
import Usuario from "../../models/usuarios.js";
import errors from "../../helpers/errorUsuarios.js";

async function getAllUsers() {
  const usuarios = await Usuario.findAll();
  if (!usuarios) throw new errors.USER_LIST_ERROR();
  return usuarios;
}

async function buscarUserPorId(id) {
  const usuario = await Usuario.findByPk(id);
  if (!usuario) throw new errors.USER_NOT_FOUND();
  return usuario;
}


async function buscarPorEmail(email){
    const usuario = await Usuario.findOne({
        where: {
            email: email
        }
    })
    return usuario;
}


async function crearUsuario(email, contraseña, nombre, apellido, telefono, direccion, role = "CLIENT") {
    if (!email || !contraseña || !nombre || !apellido || !telefono || !direccion) {
        throw new errors.FALTAN_DATOS_USUARIO();
    }
    const oldUser = await getByEmail(email);
    if(oldUser){
        throw new errors.USER_ALREADY_EXISTS();
    }
    const hash = await hashContraseña(contraseña);
    const nuevoUsuario = await Usuario.create({
      nombre,
      apellido,
      email,
      telefono,
      direccion,
      contraseña:hash,
      role
    });
   return nuevoUsuario;
}


async function actualizarUsuario(email, contraseña, nombre, apellido, telefono, direccion) {
  const usuario = await Usuario.findByPk(id);
  if (!usuario) {
    throw new errors.USER_NOT_FOUND();
  }
  usuario.email = email || usuario.email;
  usuario.contraseña = contraseña || usuario.contraseña;
  usuario.nombre = nombre || usuario.nombre;
  usuario.apellidio = apellido || usuario.apellido;
  usuario.telefono = telefono || usuario.telefono;
  usuario.direccion = direccion || usuario.direccion;
  if(contraseña){
    const hash = await hashContraseña(contraseña);
    usuario.contraseña=hash;
  }

  await usuario.save();
  return usuario;
}


async function eliminarUsuario(id) {
  const borrarUsuario = await Usuario.findByPk(id);
    if(!usuario){
        throw new errors.USER_NOT_FOUND();
    }
    await borrarUsuario.destroy();
    return borrarUsuario;
}

export const functions = {
    getAllUsers,
    buscarUserPorId,
    buscarPorEmail,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
}
export default functions;
