import controladorUsuario from "../../controllers/usuarios/controladorUsuario.js"

async function getAllUsers(req, res) {
    try {
        const usuarios = await controladorUsuario.getAllUsers();
        res.render("usuarios/listaUsuarios", { usuarios });
    } catch (error) {
        console.error('Error al obtener los usuarios: ', error);
        res.status(500).send('Hubo un error al obtener los usuarios');
    }
}

async function mostrarUsuarioPorId(req, res) {
    const id = parseInt(req.params.id);
    try {
        const usuario = await controladorUsuario.buscarUserPorId(id);
        if (!usuario) {
            return res.status(404).send('Usuario no encontrado');
        }
        res.render('usuarios/mostrarUsuarioPorId', { usuario });

    } catch (error) {
        console.error('Error al obtener el usuario')
        res.status(500).send('Hubo un error al obtener el usuario');
    }
}

async function crearFormularioUsuario(req, res) {

    try {
        res.render('usuarios/nuevoUsuario');

    } catch (error) {
        console.error('Error al renderizar el fomulario de nuevos usuario:', error);
        res.status(500).send('Hubo un error al cargar el formulario.');
    }
}

async function crearUsuario(req, res) {
    const { email,
        contraseña,
        nombre,
        apellido,
        telefono,
        direccion, } = req.body;

    try {
        if (!email || !contraseña || !nombre || !apellido || !telefono || !direccion) {
            return res.status(400).send('Todos los campos son obligatorios.');
        }

        await controladorUsuario.crearUsuario(email, contraseña, nombre, apellido, telefono, direccion);
        res.redirect(`/usuarios/lista`);
    } catch (error) {
        console.error('Error al crear la bicicleta', error);
        res.status(500).send('Hubo un error al crear la bicicleta.');
    }
}

async function actualizarUsuario(req, res) {
    const { id } = req.params;

    try {
        const usuario = await controladorUsuario.buscarUserPorId(id);

        if (!usuario) {
            return res.status(404).send('Usuario no encontrado.');
        }
        res.render('usuarios/actualizarUsuario', { usuario });

    } catch (error) {
        console.error('Error al cargar el usuario para editar: ', error);
        res.status(500).send('Hubo un error al cargar la bicicleta para editar.');
    }
}

async function elimimnarUsuario(req, res) {

    const { id } = req.params;

    try {
        await controladorUsuario.eliminarUsuario(id);
        res.redirect('usuarios/lista');

    } catch (error) {
        res.status(500).send('Hubo un error al eliminar el usuario');
    }
}

export const functions = {
    getAllUsers,
    mostrarUsuarioPorId,
    crearFormularioUsuario,
    crearUsuario,
    actualizarUsuario,
    elimimnarUsuario
};

export default functions;