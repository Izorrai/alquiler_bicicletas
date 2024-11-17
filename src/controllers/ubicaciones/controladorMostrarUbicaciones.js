import controladorUbicacion from "../../controllers/ubicaciones/controladorUbicaciones.js"

async function getAll(req, res) {
    try {
        const ubicaciones = await controladorUbicacion.getAll();
        console.log(ubicaciones);
        res.render("ubicaciones/listaUbicaciones", { ubicaciones });
    } catch (error) {
        console.error("Error al obtener las ubicaciones:", error);
        res.status(500).send("Hubo un error al obtener las ubicaciones.");
    }
}

async function mostrarPorId(req, res) {
    const id = parseInt(req.params.id);
    try {
      const ubicacion = await controladorUbicacion.buscarPorId(id); 
      if (!ubicacion) {
        return res.status(404).send("Ubicación no encontrada");
      }
      res.render("ubicaciones/mostrarUbicacionPorId", { ubicacion });
    } catch (error) {
      console.error("Error al obtener la ubicación:", error);
      res.status(500).send("Hubo un error al obtener la ubicacion.");
    }
  }

async function crearFormulario(req, res) {
    try {
        res.render("ubicaciones/nuevaUbicacion");
    } catch (error) {
        console.error("Error al renderizar el formulario de nueva ubicación:", error);
        res.status(500).send("Hubo un error al cargar el formulario.");
    }
}

async function crear(req, res) {
    const {nombre_estacion, direccion, latitud, longitud } = req.body;
    
    try {
        
        if (!nombre_estacion || !direccion|| !latitud || !longitud) {
            return res.status(400).send("Todos los campos son obligatorios.");
        }
        
        await controladorUbicacion.crear(nombre_estacion, direccion, latitud, longitud);
        res.redirect(`/ubicaciones/lista`);  
    } catch (error) {
        console.error("Error al crear la ubicación:", error);
        res.status(500).send("Hubo un error al crear la ubicación.");
    }
}


async function actualizarUbicacion(req, res) {
    const { nombre_estacion, direccion, latitud, longitud} = req.body;
    const id = parseInt(req.params.id);

    try {
        

        // Llama a la función del controlador para actualizar la bicicleta
        const ubicacionActualizada = await controladorUbicacion.actualizarUbicacion(id, nombre_estacion, direccion, latitud, longitud);
        
        if (!ubicacionActualizada) {
            return res.status(404).send("No se pudo actualizar la ubicación. No encontrada.");
        }

        // Redirige a la página de la ubicación actualizada
        res.redirect(`/ubicaciones/${id}`);
    } catch (error) {
        console.error("Error al actualizar la ubicación:", error);
        res.status(500).send("Hubo un error al actualizar la ubicación.");
    }
}



/*async function actualizarUbicacion(req, res) {
    const { id } = req.params;
    
    try {
        const ubicacion= await controladorUbicacion.buscarPorId(id); // Obtener la ubicación por id
        
        // Verificar si la ubicación existe
        if (!ubicacion) {
            return res.status(404).send("ubicación no encontrada.");
        }

        res.render("ubicaciones/actualizarUbicación ", { ubicacion });
    } catch (error) {
        console.error("Error al cargar la bicicleta para editar:", error);
        res.status(500).send("Hubo un error al cargar la ubicación para editar.");
    }
}*/



async function eliminar(req, res) {
    const { id } = req.params;
    try {
        await controladorUbicacion.eliminar(id);
        res.redirect("/ubicaciones/lista");  
    } catch (error) {
        res.status(500).send("Hubo un error al eliminar la ubicación.");
    }
}



export const functions = {
    getAll,
    crearFormulario,
    mostrarPorId,
    crear,
    actualizarUbicacion,
    eliminar
}

export default functions;



