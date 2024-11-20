import Usuario from "../../models/usuarios.js";
import Alquiler from "../../models/alquileres.js";
import Pago from "../../models/pagos.js";

async function buscarFacturas(id) {
  try {
    
    const usuario = await Usuario.findByPk(id, {
      include: [
        {
          model: Alquiler,
          attributes: ['alquiler_id', 'fecha_inicio', 'fecha_fin', 'costo'],
          include: [
            {
              model: Pago,
              attributes: ['factura','metodo_pago','deuda']
            }
          ]
        }
      ]
    });

    if (!usuario) {
      throw new Error('Usuario no encontrado');
    }

    
    const facturasFormateadas = usuario.alquileres.map(alquiler => ({
      alquiler_id: alquiler.alquiler_id,
      fecha_inicio: alquiler.fecha_inicio,
      fecha_fin: alquiler.fecha_fin,
      costo: alquiler.costo,
      factura: alquiler.pagos?.[0]?.factura || 'Sin factura',
      metodo_pago: alquiler.pagos?.[0]?.metodo_pago,
      deuda: alquiler.pagos?.[0]?.deuda
    }));

    return facturasFormateadas;

  } catch (error) {
    console.error('Error al obtener las facturas:', error);
    throw new Error('No se pudieron obtener las facturas');
  }
}

export const functions = {
  buscarFacturas
};

export default functions;