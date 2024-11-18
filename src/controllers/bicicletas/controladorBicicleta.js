import Bicicleta from "../../models/bicicletas.js";


async function getAll() {
  try {
    const bicicletas = await Bicicleta.findAll();
    return bicicletas;
  } catch (error) {
    console.error('Error al obtener bicicletas:', error);
    throw new Error('No se pudieron obtener las bicicletas');
  }
}

async function buscarPorId(id) {
    try {
      const bicicleta = await Bicicleta.findByPk(id); 
      return bicicleta;
    } catch (error) {
      console.error('Error al buscar bicicleta por ID:', error);
      throw new Error('No se pudo encontrar la bicicleta');
    }
  }


async function crear(marca, tipo, estado) {
  try {
    if (!marca || !tipo || !estado) {
      throw new Error('Faltan datos obligatorios (marca, tipo, estado)');
    }

    const nuevaBicicleta = await Bicicleta.create({
      marca,
      tipo,
      estado
    });

    return nuevaBicicleta;
  } catch (error) {
    console.error('Error al crear bicicleta:', error);
    throw new Error('No se pudo crear la bicicleta');
  }
}


async function actualizarBicicleta(id, marca, tipo, estado) {
  try {
    
    const bicicleta = await Bicicleta.findByPk(id);

    if (!bicicleta) {
      throw new Error('Bicicleta no encontrada');
    }

    
    bicicleta.marca = marca || bicicleta.marca;
    bicicleta.tipo = tipo || bicicleta.tipo;
    bicicleta.estado = estado || bicicleta.estado;

    
    await bicicleta.save();

    return bicicleta;
  } catch (error) {
    console.error('Error al actualizar bicicleta:', error);
    throw new Error('No se pudo actualizar la bicicleta');
  }
}


async function eliminar(id) {
  try {
    
    const bicicleta = await Bicicleta.findByPk(id);

    if (!bicicleta) {
      throw new Error('Bicicleta no encontrada');
    }

    
    await bicicleta.destroy();

    return { message: 'Bicicleta eliminada correctamente' };
  } catch (error) {
    console.error('Error al eliminar bicicleta:', error);
    throw new Error('No se pudo eliminar la bicicleta');
  }
}

export const functions = {
  getAll,
  buscarPorId,
  crear,
  actualizarBicicleta,
  eliminar
};

export default functions;



