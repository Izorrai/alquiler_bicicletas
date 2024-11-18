import controladorBicicleta from "../../controllers/facturacion/controladorFacturas.js";


async function mostrarFacturas(req, res) {
    const id = parseInt(req.params.id);
    try {
        const factura = await controladorFacturas.buscarFacturas(id); 
        if (!factura) {
            return res.status(404).send("factura no encontrada");
        }
        res.render("facturas/mostrarFacturas", { factura });
    } catch (error) {
        console.error("Error al obtener la factura:", error);
        res.status(500).send("Hubo un error al obtener la factura.");
    }
}




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

  
  export default mostrarFacturas;