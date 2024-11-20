
import calcularDuracion from '../../utils/calculadores.js';
import Alquiler from '../../models/alquileres.js';
import Bicicleta from "../../models/bicicletas.js";
import Ubicacion from "../../models/ubicaciones.js";
import DisponibilidadBicicleta from "../../models/disponibilidad_bicicletas.js";
import Pago from "../../models/pagos.js";

async function devolverBicicleta(req, res){
  const transaction = await sequelize.transaction();

  try {
    const { alquiler_id, bicicleta_id, entrega_id } = req.body;

    if (!alquiler_id || !bicicleta_id || !entrega_id) {
      return res.status(400).json({
        error: "Todos los campos son requeridos"
      });
    }

    const alquiler = await Alquiler.findOne({
      where: {
        alquiler_id,
        estado: 'activo'
      },
      lock: true,
      transaction
    });

    if (!alquiler) {
      await transaction.rollback();
      return res.status(404).json({
        error: "Alquiler no encontrado o ya finalizado"
      });
    }

    const ubicacionEntrega = await Ubicacion.findByPk(entrega_id);
    if (!ubicacionEntrega) {
      await transaction.rollback();
      return res.status(404).json({
        error: "Ubicación de entrega no encontrada"
      });
    }

    await Promise.all([
      Bicicleta.update(
        { estado: 'disponible' },
        { 
          where: { bicicleta_id },
          transaction 
        }
      ),
      DisponibilidadBicicleta.update(
        { 
          estado: 'disponible',
          ubicacion_id: entrega_id 
        },
        { 
          where: { bicicleta_id },
          transaction 
        }
      )
    ]);

    const fechaFin = new Date();
    const duracion = calcularDuracion(alquiler.fecha_inicio, fechaFin);

    await Promise.all([
      alquiler.update({
        fecha_fin: fechaFin,
        duracion,
        estado: 'finalizado',
        entrega_id
      }, { transaction }),

      Pago.update(
        { deuda: 'pagado' },
        { 
          where: { alquiler_id },
          transaction 
        }
      )
    ]);

    await transaction.commit();

    res.status(200).json({
      success: true,
      mensaje: "Bicicleta devuelta exitosamente",
      alquiler: {
        ...alquiler.toJSON(),
        duracion
      }
    });

  } catch (error) {
    await transaction.rollback();
    console.error("Error al devolver la bicicleta:", error);
    res.status(500).json({
      error: "Error al devolver la bicicleta",
      detalles: error.message
    });
  }
};


export const functions ={

devolverBicicleta

}

export default functions