import controladorUsuario from "./controllers/usuarios/controladorUsuario.js";

async function getAllUsuarios(req, res) {
  const usuarios = await controladorUsuario.getAllUsers();
  res.json(usuarios);
}

async function buscarUsuarioPorId(req, res) {
  const id = parseInt(req.params.id);
  const usuario = await controladorUsuario.buscarUserPorId(id);
  if (!usuario) {
    return res.status(404).send("Usuario no encontrado");
  }
  res.json(usuario);
}

async function crearUsuario(req, res) {
  const { email, contraseña, nombre, apellido, telefono, direccion } = req.body;
  const newUser = await controladorUsuario.crearUsuario(
    email,
    contraseña,
    nombre,
    apellido,
    telefono,
    direccion
  );
  res.json({ usuario: newUser });
}

async function actualizarUsuario(req, res) {
  const { email, contraseña, nombre, apellido, telefono, direccion } = req.body;
  const id = parseInt(req.params.id);

  const updatedUser = await controladorUsuario.actualizarUsuario(
    email,
    contraseña,
    nombre,
    apellido,
    telefono,
    direccion,
    id
  );
  res.json({ usuario: updatedUser });
}

async function eliminarUsuario(req, res) {
    const id = parseInt(req.params.id);
  const usuarioAEliminar = await controladorUsuario.eliminarUsuario(id);
  res.json({usuario: usuarioAEliminar });
}

export const functions = {
    getAllUsuarios,
    buscarUsuarioPorId,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario,
};

export default functions;