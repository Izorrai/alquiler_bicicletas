import controladorUsuario from "../../controllers/usuarios/controladorUsuario.js";

async function getAllUsers(req, res) {
  try {
    const usuarios = await controladorUsuario.getAllUsers();
    res.render("usuarios/listaUsuarios", { usuarios });
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function mostrarUsuarioPorId(req, res) {
  try {
    const id = parseInt(req.params.id);
    const usuario = await controladorUsuario.buscarUserPorId(id);

    res.render("usuarios/mostrarUsuarioPorId", { usuario });
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function mostrarPerfil(req, res) {
  try {
    const id = req.session.user.usuario_id
    const usuario = await controladorUsuario.buscarUserPorId(id);

    res.render("usuarios/mostrarUsuarioPorId", { usuario });
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function crearFormularioUsuario(req, res) {
  try {
    res.render("usuarios/nuevoUsuario");
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function crearUsuario(req, res) {
  try {
    const { email, contraseña, nombre, apellido, telefono, direccion } =
      req.body;

    await controladorUsuario.crearUsuario(
      email,
      contraseña,
      nombre,
      apellido,
      telefono,
      direccion
    );
    res.redirect(`/usuarios/lista`);
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}


async function actualizarFormUsuario(req, res) {
  try {
    const {id} = req.params;
    const usuario = await controladorUsuario.buscarUserPorId(id);

    res.render("usuarios/actualizarUsuario", { usuario });
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}
async function actualizarUsuario(req, res) {
  try {
    const {email, contraseña, nombre, apellido, telefono, direccion  } = req.body;
    const id = parseInt(req.params.id);

    await controladorUsuario.actualizarUsuario(
      id,
      email,
      contraseña,
      nombre,
      apellido,
      telefono,
      direccion
    );

    res.redirect(`/usuarios/lista`);
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}


async function elimimnarUsuario(req, res) {
  try {
    const { id } = req.params;
    await controladorUsuario.eliminarUsuario(id);
    res.redirect("/usuarios/lista");
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

export const functions = {
  getAllUsers,
  mostrarPerfil,
  mostrarUsuarioPorId,
  crearFormularioUsuario,
  crearUsuario,
  actualizarUsuario,
  elimimnarUsuario,
  actualizarFormUsuario,
};

export default functions;
