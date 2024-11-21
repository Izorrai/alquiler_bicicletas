import { calcularDuracion } from '../../utils/calculadores.js';
import Alquiler from '../../models/alquileres.js';
import Bicicleta from "../../models/bicicletas.js";
import Pago from "../../models/pagos.js";
import Ubicacion from '../../models/ubicaciones.js';
import DisponibilidadBicicleta from '../../models/disponibilidad_bicicletas.js';


async function devolverBicicleta(req, res) {
    try {
        const { alquiler_id, bicicleta_id, entrega_id } = req.body;

        if (!alquiler_id || !bicicleta_id || !entrega_id) {
            return res.status(400).json({
                error: "Todos los campos son necesarios"
            });
        }

        
        const alquilerActual = await Alquiler.findByPk(alquiler_id);
        const disponibilidad = await DisponibilidadBicicleta.findOne({
            where: {
                bicicleta_id,
                estado: 'noDisponible'
            }
        });

        if (!alquilerActual || !disponibilidad) {
            return res.status(404).json({
                error: "Alquiler no encontrado o bicicleta ya devuelta"
            });
        }

        const ubicacionEntrega = await Ubicacion.findByPk(entrega_id);
        if (!ubicacionEntrega) {
            return res.status(404).json({
                error: "Ubicación de entrega no encontrada"
            });
        }

        const fechaFin = new Date();
        const duracion = calcularDuracion(alquilerActual.fecha_inicio, fechaFin);

        await Promise.all([
            Bicicleta.update(
                { estado: 'disponible' },
                { where: { bicicleta_id }}
            ),
            DisponibilidadBicicleta.update(
                { 
                    estado: 'disponible',
                    ubicacion_id: entrega_id 
                },
                { where: { bicicleta_id }}
            ),
            alquilerActual.update({
                fecha_fin: fechaFin,
                duracion,
                entrega_id
            }),
            Pago.update(
                { deuda: 'abonado' },
                { where: { alquiler_id }}
            )
        ]);


         res.render('alquileres/devolucionCorrecta', {
           alquiler: alquilerActual,
           ubicacion: ubicacionEntrega,
           pago: await Pago.findOne({where: {alquiler_id}})
       });

   } catch (error) {
       console.error("Error al devolver la bicicleta:", error);
       res.status(500).json({
           error: "Error al devolver la bicicleta",
           detalles: error.message
       });
   }
}
      
export const functions = {
  devolverBicicleta
};

export default functions;