import Bicicleta from "../../models/bicicletas.js";
import Ubicacion from "../../models/ubicaciones.js";

async function mostrarInformacionAlquiler(req, res) {
    try {
        c
        
        const { bicicleta_id, ubicacion_id } = req.params;
        
        const [bicicleta, ubicacion] = await Promise.all([
            Bicicleta.findByPk(bicicleta_id),
            Ubicacion.findByPk(ubicacion_id)
        ]);

        

        if (!bicicleta || !ubicacion) {
            console.log('Recurso no encontrado'); // Debug
            return res.status(404).send("Bicicleta o ubicación no encontrada");
        }

        // Usuario de prueba
        const usuario = {
            usuario_id: 1,
            nombre: 'Usuario Prueba'
        };

        
        return res.render("alquileres/informacionAlquiler", {
            bicicleta,
            ubicacion,
            usuario
        });

    } catch (error) {
        
        return res.status(500).send("Error al cargar la información de alquiler");
    }
};

export const functions = {
    mostrarInformacionAlquiler
};

export default functions;