import Ubicacion from "../../models/ubicaciones.js";
import Bicicleta from "../../models/bicicletas.js";
import DisponibilidadBicicleta from "../../models/disponibilidad_bicicletas.js";


async function buscarBicicletasPorUbicacion() {
    try {
      console.log("Iniciando búsqueda de bicicletas por ubicación");
  
      const ubicaciones = await Ubicacion.findAll({
        include: [{
          model: DisponibilidadBicicleta,
          required: true,
          attributes: ['estado', 'ubicacion_id', 'bicicleta_id'],
          include: [{
            model: Bicicleta,
            required: true,
            attributes: ['bicicleta_id', 'tipo', 'marca', 'estado'] 
          }]
        }],
        attributes: ['ubicacion_id', 'nombre_estacion', 'direccion', 'latitud', 'longitud']
      });
  
      console.log(`Número de ubicaciones encontradas:`,ubicaciones);
  
      ubicaciones.forEach(ubicacion => {
        console.log(`Ubicación: ${ubicacion.nombre_estacion}`);
        
        
        if (ubicacion.disponibilidad_bicicleta && ubicacion.disponibilidad_bicicleta.length > 0) {
          console.log(`Número de disponibilidades: ${ubicacion.disponibilidad_bicicleta.length}`);
        } else {
          console.log("No hay bicicletas disponibles en esta ubicación.");
        }
      });
  
      const ubicacionesFormateadas = ubicaciones.map(ubicacion => ({
        nombre_estacion: ubicacion.nombre_estacion,
        direccion: ubicacion.direccion,
        latitud: ubicacion.latitud,
        longitud: ubicacion.longitud,
        bicicletas: ubicacion.disponibilidad_bicicleta.map(disponibilidad => {
          if (disponibilidad.bicicleta) {
            return {
              id: disponibilidad.bicicleta.bicicleta_id,
              tipo: disponibilidad.bicicleta.tipo,
              marca: disponibilidad.bicicleta.marca,
              estado: disponibilidad.bicicleta.estado, 
              estado_disponibilidad: disponibilidad.estado 
            };
          } else {
            console.log("No se encontró bicicleta en disponibilidad", disponibilidad);
            return null; 
          }
        }).filter(bicicleta => bicicleta !== null) 
      }));
  
      console.log('Ubicaciones formateadas:', JSON.stringify(ubicacionesFormateadas, null, 2));
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
