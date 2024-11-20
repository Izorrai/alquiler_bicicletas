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

async function crearUsuario(
  email,
  contraseña,
  nombre,
  apellido,
  telefono,
  direccion
) {
  if (!email || !contraseña || !nombre || !apellido || !telefono || !direccion)
    throw new errors.FALTAN_DATOS_USUARIO();

  const newUsuario = await Usuario.create({
    email,
    contraseña,
    nombre,
    apellido,
    telefono,
    direccion,
  });
  if (!newUsuario) throw new errors.USUARIO_NO_CREADO();
  return newUsuario;
}

async function actualizarUsuario(
  email,
  contraseña,
  nombre,
  apellido,
  telefono,
  direccion
) {
  const usuario = await Usuario.findByPk(id);

  if (!usuario) throw new errors.USER_NOT_FOUND();

  usuario.email = email || usuario.email;
  usuario.contraseña = contraseña || usuario.contraseña;
  usuario.nombre = nombre || usuario.nombre;
  usuario.apellidio = apellido || usuario.apellido;
  usuario.telefono = telefono || usuario.telefono;
  usuario.direccion = direccion || usuario.direccion;

  await usuario.save();

  return usuario;
}

async function eliminarUsuario(id) {
    const usuario = await Usuario.findByPk(id);

    if (!usuario) this.throw(new errors.USER_NOT_FOUND());

    await usuario.destroy();
    return { message: "Usuario eliminado correctamente" };
  
}

export const functions = {
  getAllUsers,
  buscarUserPorId,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario,
};

export default functions;
