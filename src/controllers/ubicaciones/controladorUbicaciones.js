import Ubicacion from "../../models/ubicaciones.js";


async function getAll() {
  try {
    const ubicaciones = await Ubicacion.findAll();
    return ubicaciones;
  } catch (error) {
    console.error('Error al obtener ubicaciones:', error);
    throw new Error('No se pudieron obtener las ubicaciones');
  }
}

async function buscarPorId(id) {
    try {
      const ubicacion = await Ubicacion.findByPk(id); // Uso de Sequelize para buscar por primary key
      return ubicacion;
    } catch (error) {
      console.error('Error al buscar ubicacion por ID:', error);
      throw new Error('No se pudo encontrar la ubicacion');
    }
  }


async function crear(nombre_estacion, direccion, latitud, longitud) {
  try {
    if (!nombre_estacion || !direccion || !latitud || !longitud) {
      throw new Error('Faltan datos obligatorios (nombre_estacion, direccion, latitud, longitud)');
    }

    const nuevaUbicacion = await Ubicacion.create({
      nombre_estacion,
      direccion,
      latitud,
      longitud
    });

    return nuevaUbicacion;
  } catch (error) {
    console.error('Error al crear ubicacion:', error);
    throw new Error('No se pudo crear la ubicacion');
  }
}


async function actualizarUbicacion (id,nombre_estacion, direccion, latitud, longitud) {
  try {
    
    const ubicacion = await Ubicacion.findByPk(id);

    if (!ubicacion) {
      throw new Error('Ubicacion no encontrada');
    }

    
    ubicacion.nombre_estacion = nombre_estacion || ubicacion.nombre_estacion;
    ubicacion.direccion = direccion || ubicacion.direccion;
    ubicacion.latitud = latitud || ubicacion.latitud;
    ubicacion.longitud = longitud || ubicacion.longitud;

    
    await ubicacion.save();

    return ubicacion;
  } catch (error) {
    console.error('Error al actualizar ubicacion', error);
    throw new Error('No se pudo actualizar la ubicacion');
  }
}


async function eliminar(id) {
  try {
    
    const ubicacion = await Ubicacion.findByPk(id);

    if (!ubicacion) {
      throw new Error('ubicacion no encontrada');
    }

    
    await ubicacion.destroy();

    return { message: 'ubicacion eliminada correctamente' };
  } catch (error) {
    console.error('Error al eliminar ubicacion:', error);
    throw new Error('No se pudo eliminar la ubicacion');
  }
}

export const functions = {
  getAll,
  buscarPorId,
  crear,
  actualizarUbicacion,
  eliminar
};

export default functions;



