import { hashContraseña } from "../../config/bcryct.js";
import Usuario from "../../models/usuarios.js";
// importar ruta errores

async function getAllUsers() {
    try {
        const usuarios = await Usuario.findAll();
        return usuarios;
    }
    catch (error) {
        console.error('Error al obtener usuarios', error);
    }
}

async function buscarUserPorId(id) {
    try {
        const usuario = await Usuario.findByPk(id);
        return usuario;
    }
    catch (error) {
        console.error('Error al buscar usuario por ID: ', error);
    }
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
        throw new Error('Faltan datos obligatorios'); // meter nuestro error
    }
    const oldUser = await getByEmail(email);
    if(oldUser){
        throw new Error ("ya existe usuario con ese email") // meter nuestro error
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

    try {
        const usuario = await Usuario.findByPk(id);

        if (!usuario) {
            throw new Error('Usuario no encontrado');
        }

        usuario.email = email || usuario.email;
        usuario.contraseña = contraseña || usuario.contraseña;
        usuario.nombre = nombre || usuario.nombre;
        usuario.apellidio = apellido || usuario.apellido;
        usuario.telefono = telefono || usuario.telefono;
        usuario.direccion = direccion || usuario.direccion;

        await usuario.save();

        return usuario;

    } catch (error) {
        console.error('Error al actualizar el usuario: ', error);
    }
}

async function eliminarUsuario(id) {
    try {
        const usuario = await Usuario.findByPk(id);

        if (!usuario) {
            throw new Error('Usuario para eliminar no encontrado')
        }

        await usuario.destroy();
        return { message: 'Usuario eliminado correctamente' };

    } catch (error) {
        console.error('Error al eliminar usuario:', error)
    }
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