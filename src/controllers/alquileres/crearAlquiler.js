
import generarNumeroFactura from '../../utils/generadores.js';
import calcularCosteAlquiler from '../../utils/calculadores.js';
import Alquiler from '../../models/alquileres.js';
import Bicicleta from "../../models/bicicletas.js";
import Ubicacion from "../../models/ubicaciones.js";
import Usuario from '../../models/usuarios.js';
import DisponibilidadBicicleta from "../../models/disponibilidad_bicicletas.js";
import Pago from "../../models/pagos.js";


async function crearAlquiler(req, res){
  const transaccion = await sequelize.transaction();

  try {
    const { usuario_id, bicicleta_id, recogida_id } = req.body;

    if (!usuario_id || !bicicleta_id || !recogida_id) {
      await transaccion.rollback();
      return res.status(400).json({
        error: "Faltan datos necesarios"
      });
    }

    const [usuario, bicicleta, ubicacionRecogida] = await Promise.all([
      Usuario.findByPk(usuario_id),
      Bicicleta.findByPk(bicicleta_id),
      Ubicacion.findByPk(recogida_id)
    ]);

    if (!usuario || !bicicleta || !ubicacionRecogida) {
      await transaccion.rollback();
      return res.status(404).json({
        error: "No se encontraron los recursos necesarios"
      });
    }

    const disponibilidad = await DisponibilidadBicicleta.findOne({
      where: {
        bicicleta_id,
        ubicacion_id: recogida_id,
        estado: 'disponible'
      },
      transaction: transaccion
    });

    if (!disponibilidad) {
      await transaccion.rollback();
      return res.status(400).json({
        error: "La bicicleta no está disponible en esta ubicación"
      });
    }

    const costo = calcularCosteAlquiler(bicicleta);
    const numeroFactura = generarNumeroFactura();

    const alquiler = await Alquiler.create({
      usuario_id,
      bicicleta_id,
      recogida_id,
      entrega_id: null,
      fecha_inicio: new Date(),
      costo,
      estado: 'activo'
    }, { transaction: transaccion });

    await Pago.create({
      alquiler_id: alquiler.alquiler_id,
      factura: numeroFactura,
      metodo_pago: 'efectivo',
      deuda: 'pendiente',
      monto: costo
    }, { transaction: transaccion });

    await Promise.all([
      Bicicleta.update(
        { estado: 'en uso' },
        { where: { bicicleta_id }, transaction: transaccion }
      ),
      DisponibilidadBicicleta.update(
        { estado: 'noDisponible' },
        { 
          where: { bicicleta_id, ubicacion_id: recogida_id },
          transaction: transaccion 
        }
      )
    ]);

    await transaccion.commit();

    res.status(201).json({
      exito: true,
      mensaje: "Alquiler creado exitosamente",
      alquiler
    });

  } catch (error) {
    await transaccion.rollback();
    console.error("Error al crear el alquiler:", error);
    res.status(500).json({
      error: "Error al crear el alquiler",
      detalles: error.message
    });
  }
};

export const functions = {
  
  crearAlquiler
};

export default functions;