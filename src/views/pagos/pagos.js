


import Usuario from "../../models/usuarios.js";
import Alquiler from "../../models/alquileres.js";
import Pago from "../../models/pagos.js";

const app = express();

app.get('/alquileres', async (req, res) => {
  try {
    
    const usuarios = await Usuario.findAll({
      include: {
        model: Alquiler,
        include: {
          model: Pago,
          attributes: ['factura'],  
        },
      },
    });

    
    const resultado = usuarios.map(usuario => {
      return {
        usuario_id: usuario.usuario_id,
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        email: usuario.email,
        alquileres: usuario.alquilers.map(alquiler => ({
          alquiler_id: alquiler.alquiler_id,
          fecha_inicio: alquiler.fecha_inicio,
          fecha_fin: alquiler.fecha_fin,
          costo: alquiler.costo,
          facturas: alquiler.pagos.map(pago => pago.factura),
        })),
      };
    });

    
    res.render('pagos', { usuarios: resultado });
  } catch (error) {
    console.error('Error al obtener los alquileres y facturas:', error);
    res.status(500).send('Error en el servidor');
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
