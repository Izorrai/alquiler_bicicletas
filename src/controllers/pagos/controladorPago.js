import Pago from "../../models/pagos.js";


async function getAll() {
  try {
    const pagos = await Pago.findAll();
    return pagos;
  } catch (error) {
    console.error('Error al obtener pagos:', error);
    throw new Error('No se pudieron obtener los pagos');
  }
}

async function buscarPorId(id) {
    try {
      const pago = await Pago.findByPk(id); 
      return pago;
    } catch (error) {
      console.error('Error al buscar pago por ID:', error);
      throw new Error('No se pudo encontrar el pago');
    }
  }


async function crear(factura, metodo_pago) {
  try {
    if (!factura|| !metodo_pago) {
      throw new Error('Faltan datos obligatorios');
    }

    const nuevoPago = await Pago.create({
        factura,
        metodo_pago
      
    });

    return nuevoPago;
  } catch (error) {
    console.error('Error al crear pago:', error);
    throw new Error('No se pudo crear la pago');
  }
}


async function actualizarPago(id, factura, metodo_pago) {
  try {
    
    const pago = await Pago.findByPk(id);
    if (!pago) {
      throw new Error('pago no encontrado');
    }

    
    pago.factura= factura || pago.factura;
    pago.metodo_pago = metodo_pago || pago.metodo_pago;
   

    
    await pago.save();

    return pago;
  } catch (error) {
    console.error('Error al actualizar pago:', error);
    throw new Error('No se pudo actualizar el pago');
  }
}


async function eliminar(id) {
  try {
    
    const pago = await Pago.findByPk(id);

    if (!pago) {
      throw new Error('pago no encontrada');
    }

    
    await pago.destroy();

    return { message: 'pago eliminada correctamente' };
  } catch (error) {
    console.error('Error al eliminar pago:', error);
    throw new Error('No se pudo eliminar la pago');
  }
}

export const functions = {
  getAll,
  buscarPorId,
  crear,
  actualizarPago,
  eliminar
};

export default functions;



