import controladorPago from "../../controllers/pagos/controladorPago.js"

async function getAll(req, res) {
    try {
        const pagos = await controladorPago.getAll();
        console.log(pagos);
        res.render("pagos/listaPagos", { pagos });
    } catch (error) {
        console.error("Error al obtener las pagos:", error);
        res.status(500).send("Hubo un error al obtener los pagos.");
    }
}

async function mostrarPorId(req, res) {
    const id = parseInt(req.params.id);
    try {
      const pago = await controladorPago.buscarPorId(id); 
      if (!pago) {
        return res.status(404).send("pago no encontrada");
      }
      res.render("pagos/mostrarPago", { pago });
    } catch (error) {
      console.error("Error al obtener la pago:", error);
      res.status(500).send("Hubo un error al obtener el pago.");
    }
  }

async function crearFormulario(req, res) {
    try {
        res.render("pagos/nuevoPago");
    } catch (error) {
        console.error("Error al renderizar el formulario de nuevo pago:", error);
        res.status(500).send("Hubo un error al cargar el formulario.");
    }
}

async function crear(req, res) {
    const { factura, metodo_pago } = req.body;
    
    try {
        
        if (!factura || !metodo_pago) {
            return res.status(400).send("Todos los campos son obligatorios.");
        }
        
        await controladorPago.crear(factura, metodo_pago);
        res.redirect(`/pagos/lista`);  
    } catch (error) {
        console.error("Error al crear la pago:", error);
        res.status(500).send("Hubo un error al crear la pago.");
    }
}


async function actualizarFormPago(req, res) {
    const { id } = req.params;
    
    try {
        const pago = await controladorPago.buscarPorId(id); 
        
        
        if (!pago) {
            
            return res.status(404).send("Pago no encontrada.");
        }

        res.render("pagos/actualizarPago", { pago });
        
    } catch (error) {
        // En caso de error, enviar una respuesta de error solo una vez
        console.error("Error al cargar la pago para editar:", error);
        if (!res.headersSent) { // Verificar si ya se ha enviado una respuesta
            res.status(500).send("Hubo un error al cargar la pago para editar.");
        }
    }
}

async function actualizarPago(req, res) {
    const { alquiler_id, factura, metodo_pago } = req.body;
    const id = parseInt(req.params.id);
    await controladorPago.actualizarPago(alquiler_id, factura, metodo_pago);
    res.redirect("/pagos/" + id);
}




async function eliminar(req, res) {
    const { id } = req.params;
    try {
        await controladorPago.eliminar(id);
        res.redirect("/pagos/lista");  
    } catch (error) {
        res.status(500).send("Hubo un error al eliminar la pago.");
    }
}



export const functions = {
    getAll,
    crearFormulario,
    mostrarPorId,
    crear,
    actualizarFormPago,
    actualizarPago,
    eliminar
}

export default functions;



