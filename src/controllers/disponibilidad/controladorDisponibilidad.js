import Ubicacion from "../../models/ubicaciones.js";
import Bicicleta from "../../models/bicicletas.js";
import DisponibilidadBicicleta from "../../models/disponibilidad_bicicletas.js";

async function buscarBicicletasPorUbicacion() {
    try {
        const ubicaciones = await Ubicacion.findAll({
            include: [{
                model: DisponibilidadBicicleta,
                as: 'disponibilidad_bicicleta',
                where: { 
                    estado: 'disponible' 
                },
                include: [{
                    model: Bicicleta,
                    where: { 
                        estado: 'disponible' 
                    }
                }]
            }],
            attributes: ['ubicacion_id', 'nombre_estacion', 'direccion', 'latitud', 'longitud']
        });

        
        console.log('Datos de ubicaciones:', JSON.stringify(ubicaciones, null, 2));

        const ubicacionesFormateadas = ubicaciones.map(ubicacion => {
            
            const disponibilidades = Array.isArray(ubicacion.disponibilidad_bicicleta) 
                ? ubicacion.disponibilidad_bicicleta 
                : [ubicacion.disponibilidad_bicicleta].filter(Boolean);

            return {
                ubicacion_id: ubicacion.ubicacion_id,
                nombre_estacion: ubicacion.nombre_estacion,
                direccion: ubicacion.direccion,
                latitud: ubicacion.latitud,
                longitud: ubicacion.longitud,
                bicicletas: disponibilidades.map(disponibilidad => ({
                    bicicleta_id: disponibilidad.bicicleta.bicicleta_id,
                    tipo: disponibilidad.bicicleta.tipo,
                    marca: disponibilidad.bicicleta.marca,
                    estado: disponibilidad.bicicleta.estado
                }))
            };
        });

        
        console.log('Datos formateados:', JSON.stringify(ubicacionesFormateadas, null, 2));

        return ubicacionesFormateadas;

    } catch (error) {
        console.error('Error al obtener las ubicaciones y bicicletas:', error);
        throw new Error('No se pudieron obtener las ubicaciones y bicicletas');
    }
}

export const functions = {
    buscarBicicletasPorUbicacion
};

export default functions;