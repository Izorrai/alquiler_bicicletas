import Alquiler from '../../models/alquileres.js';
import Bicicleta from "../../models/bicicletas.js";
import Ubicacion from "../../models/ubicaciones.js";
import Pago from "../../models/pagos.js";

async function mostrarAlquileres(req, res){
  try {
    const { page = 1, limit = 10, estado } = req.query;
    const offset = (page - 1) * limit;

    const whereClause = estado ? { estado } : {};

    const { count, rows: alquileres } = await Alquiler.findAndCountAll({
      where: whereClause,
      include: [
        {
          model: Bicicleta,
          attributes: ['bicicleta_id', 'tipo', 'marca', 'estado']
        },
        {
          model: Ubicacion,
          as: 'recogida',
          attributes: ['ubicacion_id', 'nombre_estacion', 'direccion']
        },
        {
          model: Ubicacion,
          as: 'entrega',
          attributes: ['ubicacion_id', 'nombre_estacion', 'direccion']
        },
        {
          model: Pago,
          attributes: ['factura', 'metodo_pago', 'deuda']
        }
      ],
      limit: Number(limit),
      offset: Number(offset),
      order: [['fecha_inicio', 'DESC']]
    });

    if (!alquileres || alquileres.length === 0) {
      return res.status(404).json({
        mensaje: "No se encontraron alquileres",
        data: []
      });
    }

    res.status(200).json({
      total: count,
      pagina_actual: Number(page),
      total_paginas: Math.ceil(count / limit),
      alquileres
    });

  } catch (error) {
    console.error("Error al obtener los alquileres:", error);
    res.status(500).json({
      error: "Error al obtener los alquileres",
      detalles: error.message
    });
  }
};


export const functions ={

mostrarAlquileres  
}

export default functions;