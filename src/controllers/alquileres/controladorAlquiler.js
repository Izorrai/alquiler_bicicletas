// src/controllers/alquileres/controladorAlquiler.js

import Alquiler from '../../models/alquileres.js';
import Bicicleta from "../../models/bicicletas.js";
import DisponibilidadBicicleta from "../../models/disponibilidad_bicicletas.js";
import Pago from "../../models/pagos.js";

const crearAlquiler = async (req, res) => {
    try {
        console.log('Datos recibidos:', req.body);
        const { bicicleta_id, usuario_id, recogida_id, metodo_pago } = req.body;

        // Validar datos necesarios
        if (!bicicleta_id || !usuario_id || !recogida_id || !metodo_pago) {
            return res.status(400).json({
                error: "Faltan datos necesarios"
            });
        }

        // Verificar disponibilidad
        const disponibilidad = await DisponibilidadBicicleta.findOne({
            where: {
                bicicleta_id,
                ubicacion_id: recogida_id,
                estado: 'disponible'
            }
        });

        if (!disponibilidad) {
            return res.status(400).json({
                error: "La bicicleta no está disponible en esta ubicación"
            });
        }

        // Obtener datos de la bicicleta
        const bicicleta = await Bicicleta.findByPk(bicicleta_id);
        const costo = calcularCostoAlquiler(bicicleta);
        const numeroFactura = generarNumeroFactura();

        // Crear alquiler
        const alquiler = await Alquiler.create({
            usuario_id,
            bicicleta_id,
            recogida_id,
            entrega_id: null,
            fecha_inicio: new Date(),
            fecha_fin: null,
            duracion: null,
            costo,
            estado: 'activo'
        });

        // Crear pago
        await Pago.create({
            alquiler_id: alquiler.alquiler_id,
            factura: numeroFactura,
            metodo_pago,
            deuda: 'pendiente',
            monto: costo
        });

        // Actualizar estado de la bicicleta
        await Bicicleta.update(
            { estado: 'en uso' },
            { where: { bicicleta_id } }
        );

        // Actualizar disponibilidad
        await DisponibilidadBicicleta.update(
            { estado: 'noDisponible' },
            { 
                where: { 
                    bicicleta_id, 
                    ubicacion_id: recogida_id 
                }
            }
        );

        console.log('Alquiler creado exitosamente');
        res.redirect(`/facturas/${usuario_id}`);

    } catch (error) {
        console.error("Error al crear el alquiler:", error);
        
        // Si ya se creó el alquiler pero algo más falló, intentar revertir
        if (error.alquiler) {
            try {
                await Alquiler.destroy({ where: { alquiler_id: error.alquiler.alquiler_id } });
            } catch (rollbackError) {
                console.error("Error al revertir alquiler:", rollbackError);
            }
        }

        res.status(500).json({
            error: "Error al crear el alquiler",
            detalles: error.message
        });
    }
};

// Utilidades
function generarNumeroFactura() {
    const fecha = new Date();
    const año = fecha.getFullYear();
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const dia = fecha.getDate().toString().padStart(2, '0');
    const aleatorio = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return `F${año}${mes}${dia}${aleatorio}`;
};

function calcularCostoAlquiler(bicicleta){
    const costoBase = {
        'electrica': 10,
        'montaña': 8,
        'urbana': 5
    };
    return costoBase[bicicleta.tipo.toLowerCase()] || 5;
};

export const functions = {
    crearAlquiler
};

export default functions;