
import generarNumeroFactura from '../../utils/generadores.js';
import calcularCostoAlquiler from '../../utils/calculadores.js';
import Alquiler from '../../models/alquileres.js';
import Bicicleta from "../../models/bicicletas.js";
import Ubicacion from "../../models/ubicaciones.js";
import DisponibilidadBicicleta from "../../models/disponibilidad_bicicletas.js";
import Pago from "../../models/pagos.js";


const mostrarFormularioCrear = async (req, res) => {
  try {
    const [usuarios, bicicletas, ubicaciones] = await Promise.all([
      Usuario.findAll({ where: { estado: 'activo' } }),
      Bicicleta.findAll({ where: { estado: 'disponible' } }),
      Ubicacion.findAll()
    ]);

    res.render('alquileres/crear', {
      usuarios,
      bicicletas,
      ubicaciones
    });
  } catch (error) {
    console.error("Error al cargar el formulario:", error);
    res.status(500).send("Error al cargar el formulario");
  }
};



  const crearAlquiler = async (req, res) => {
  const transaction = await sequelize.transaction();

  try {
    const { usuario_id, bicicleta_id, recogida_id, entrega_id } = req.body;

    if (!usuario_id || !bicicleta_id || !recogida_id || !entrega_id) {
      return res.status(400).json({
        error: "Todos los campos son requeridos"
      });
    }

    const [bicicleta, ubicacionRecogida, ubicacionEntrega] = await Promise.all([
      Bicicleta.findByPk(bicicleta_id),
      Ubicacion.findByPk(recogida_id),
      Ubicacion.findByPk(entrega_id)
    ]);

    if (!bicicleta || !ubicacionRecogida || !ubicacionEntrega) {
      return res.status(404).json({
        error: "Recursos no encontrados",
        detalles: {
          bicicleta: !bicicleta ? "Bicicleta no encontrada" : null,
          ubicacionRecogida: !ubicacionRecogida ? "Ubicación de recogida no encontrada" : null,
          ubicacionEntrega: !ubicacionEntrega ? "Ubicación de entrega no encontrada" : null
        }
      });
    }

    const disponibilidad = await DisponibilidadBicicleta.findOne({
      where: { 
        bicicleta_id, 
        ubicacion_id: recogida_id, 
        estado: 'disponible' 
      },
      lock: true,
      transaction
    });

    if (!disponibilidad) {
      await transaction.rollback();
      return res.status(400).json({
        error: "La bicicleta no está disponible en esta ubicación"
      });
    }

    await Promise.all([
      Bicicleta.update(
        { estado: 'en_uso' },
        { 
          where: { bicicleta_id },
          transaction 
        }
      ),
      DisponibilidadBicicleta.update(
        { estado: 'noDisponible' },
        { 
          where: { bicicleta_id, ubicacion_id: recogida_id },
          transaction 
        }
      )
    ]);

    const numeroFactura = generarNumeroFactura();
    const costo = calcularCostoAlquiler(bicicleta);

    const [alquiler, factura] = await Promise.all([
      Alquiler.create({
        usuario_id,
        bicicleta_id,
        recogida_id,
        entrega_id,
        fecha_inicio: new Date(),
        costo,
        fecha_fin: null,
        duracion: null,
        estado: 'activo'
      }, { transaction }),

      Pago.create({
        alquiler_id: alquiler.alquiler_id,
        factura: numeroFactura,
        metodo_pago: 'pendiente',
        deuda: 'pendiente',
        monto: costo
      }, { transaction })
    ]);

    await transaction.commit();

    res.status(201).json({
      success: true,
      alquiler,
      factura,
      mensaje: "Alquiler creado exitosamente"
    });

  } catch (error) {
    await transaction.rollback();
    console.error("Error al crear el alquiler:", error);
    res.status(500).json({
      error: "Error al crear el alquiler",
      detalles: error.message
    });
  }
};


export const functions ={

mostrarFormularioCrear,
crearAlquiler

}

export default functions