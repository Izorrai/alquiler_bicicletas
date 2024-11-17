import controladorBicicleta from "../../controllers/bicicletas/controladorBicicleta.js"

async function getAll(req, res) {
    try {
        const bicicletas = await controladorBicicleta.getAll();
        res.render("bicicletas/listaBicicletas", { bicicletas });
    } catch (error) {
        console.error("Error al obtener las bicicletas:", error);
        res.status(500).send("Hubo un error al obtener las bicicletas.");
    }
}

async function mostrarPorId(req, res) {
    const id = parseInt(req.params.id);
    try {
      const bicicleta = await controladorBicicleta.buscarPorId(id); 
      if (!bicicleta) {
        return res.status(404).send("Bicicleta no encontrada");
      }
      res.render("bicicletas/mostrarBicicletaPorId", { bicicleta });
    } catch (error) {
      console.error("Error al obtener la bicicleta:", error);
      res.status(500).send("Hubo un error al obtener la bicicleta.");
    }
  }

async function crearFormulario(req, res) {
    try {
        res.render("bicicletas/nuevaBicicleta");
    } catch (error) {
        console.error("Error al renderizar el formulario de nueva bicicleta:", error);
        res.status(500).send("Hubo un error al cargar el formulario.");
    }
}

async function crear(req, res) {
    const { marca, tipo, estado } = req.body;
    
    try {
        
        if (!marca || !tipo || !estado) {
            return res.status(400).send("Todos los campos son obligatorios.");
        }
        
        await controladorBicicleta.crear(marca, tipo, estado);
        res.redirect(`/bicicletas/lista`);  
    } catch (error) {
        console.error("Error al crear la bicicleta:", error);
        res.status(500).send("Hubo un error al crear la bicicleta.");
    }
}


async function actualizarBicicleta(req, res) {
    const { id } = req.params;
    
    try {
        const bicicleta = await controladorBicicleta.buscarPorId(id); // Obtener la bicicleta por id
        
        // Verificar si la bicicleta existe
        if (!bicicleta) {
            return res.status(404).send("Bicicleta no encontrada.");
        }

        res.render("bicicletas/actualizarBicicleta", { bicicleta });
    } catch (error) {
        console.error("Error al cargar la bicicleta para editar:", error);
        res.status(500).send("Hubo un error al cargar la bicicleta para editar.");
    }
}



async function eliminar(req, res) {
    const { id } = req.params;
    try {
        await controladorBicicleta.eliminar(id);
        res.redirect("/bicicletas/lista");  
    } catch (error) {
        res.status(500).send("Hubo un error al eliminar la bicicleta.");
    }
}



export const functions = {
    getAll,
    crearFormulario,
    mostrarPorId,
    crear,
    actualizarBicicleta,
    eliminar
}

export default functions;



