import Alquiler from '../../models/alquileres.js';
import Bicicleta from "../../models/bicicletas.js";
import Ubicacion from "../../models/ubicaciones.js";
import Pago from "../../models/pagos.js";
import Usuario from "../../models/usuarios.js";


async function getAllAlquileres(req, res) {
    try {
        const alquileres = await Alquiler.findAll({
            include: [
                { model: Usuario },
                { model: Bicicleta },
                { model: Ubicacion, as: 'recogida' },
                { model: Ubicacion, as: 'entrega' },
                { model: Pago }
            ]
        });
        res.render('alquileres/listaAlquileres', { alquileres });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error al obtener alquileres');
    }
}

async function crearFormularioAlquiler(req, res){
    try {
        console.log('Iniciando carga de formulario de alquiler');
        
        const [usuarios, bicicletas, ubicaciones] = await Promise.all([
            Usuario.findAll(),
            Bicicleta.findAll({ where: { estado: 'disponible' } }),
            Ubicacion.findAll()
        ]);

        console.log('Datos cargados:', {
            usuarios: usuarios.length,
            bicicletas: bicicletas.length,
            ubicaciones: ubicaciones.length
        });

        res.render('alquileres/formularioAlquiler', { 
            usuarios, 
            bicicletas, 
            ubicaciones 
        });
    } catch (error) {
        console.error('Error al cargar formulario:', error);
        res.status(500).send('Error al cargar formulario');
    }
};




async function mostrarAlquileresActivos(req, res) {
    try {
        console.log('Buscando alquileres activos...');
        const usuario_id = req.params.usuario_id || 1;

        const alquileres = await Alquiler.findAll({
            where: {
                usuario_id,
                fecha_fin: null
            },
            include: [
                {
                    model: Bicicleta,
                    as: 'bicicleta',
                    attributes: ['bicicleta_id', 'tipo', 'marca']
                },
                {
                    model: Ubicacion,
                    as: 'recogida',
                    attributes: ['nombre_estacion', 'direccion']
                }
            ]
        });

        const ubicaciones = await Ubicacion.findAll({
            attributes: ['ubicacion_id', 'nombre_estacion', 'direccion']
        });

        console.log('Alquileres encontrados:', alquileres.length);
        console.log('Ubicaciones disponibles:', ubicaciones.length);

        res.render('alquileres/alquileresActivos', {
            alquileres,
            ubicaciones
        });

    } catch (error) {
        console.error('Error completo:', error);
        res.status(500).send('Error al cargar los alquileres activos');
    }
}

const mostrarAlquilerPorId = async (req, res) => {
    try {
        const alquiler = await Alquiler.findByPk(req.params.id, {
            include: [
                { model: Usuario },
                { model: Bicicleta },
                { model: Ubicacion, as: 'recogida' },
                { model: Ubicacion, as: 'entrega' },
                { model: Pago }
            ]
        });
        if (!alquiler) return res.status(404).send('Alquiler no encontrado');
        res.render('alquileres/detalleAlquiler', { alquiler });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error al obtener alquiler');
    }
};

const actualizarFormularioAlquiler = async (req, res) => {
    try {
        const alquiler = await Alquiler.findByPk(req.params.id);
        if (!alquiler) return res.status(404).send('Alquiler no encontrado');
        res.render('alquileres/actualizarAlquiler', { alquiler });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error al cargar formulario');
    }
};

const actualizarAlquiler = async (req, res) => {
    try {
        const alquiler = await Alquiler.findByPk(req.params.id);
        if (!alquiler) return res.status(404).send('Alquiler no encontrado');
        await alquiler.update(req.body);
        res.redirect('/alquileres/lista');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error al actualizar');
    }
};

const eliminarAlquiler = async (req, res) => {
    try {
        const alquiler = await Alquiler.findByPk(req.params.id);
        if (!alquiler) return res.status(404).send('Alquiler no encontrado');
        await alquiler.destroy();
        res.redirect('/alquileres/lista');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error al eliminar');
    }
};

export const functions = {
    getAllAlquileres,
    crearFormularioAlquiler,
    mostrarAlquilerPorId,
    actualizarFormularioAlquiler,
    actualizarAlquiler,
    eliminarAlquiler,
    mostrarAlquileresActivos
};

export default functions;