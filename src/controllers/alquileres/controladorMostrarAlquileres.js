import controladorAlquiler from "../../controllers/alquileres/controladorAlquiler.js";

async function getAllAlquileres(req, res) {
  try {
    const alquileres = await controladorAlquiler.getAllAlquileres();

    res.render("alquileres/listaAlquileres", { alquileres });
  } catch (error) {
    console.error("Error al obtener los alquileres", error);
    res.status(500).send("Hubo un error al obtener los alquileres");
  }
}

async function mostrarAlquilerPorId(req, res) {
  const id = parseInt(req.params.id);

  try {
    const alquiler = await controladorAlquiler.buscarAlquilerPorId(id);
    if (!alquiler) {
      return res.status(404).send("Alquiler no encontrado");
    }
    res.render("alquileres/mostrarAlquiler", { alquiler });
  } catch (error) {
    console.error("Error al obtener el alquiler; ", error);
    res.status(500).send("Hubo un error al obtener el alquiler");
  }
}

async function crearFormularioAlquiler(req, res) {
  try {
    res.render("alquileres/nuevoAlquiler");
  } catch (error) {
    console.error("Error al renderizar el formulario de nuevo alquiler", error);
    res.status(500).send("Hubo un error al cargar el formulario de alquileres");
  }
}

async function crearAlquiler(req, res) {
  const {
    id,
    usuario_id,
    bicicleta_id,
    recogida_id,
    entrega_id,
    fecha_inicio,
    fecha_fin,
    duracion,
    costo,
  } = req.body;

  try {
    if (!usuario_id || !bicicleta_id || !recogida_id || !entrega_id || !fecha_inicio || !fecha_fin || !duracion || !costo) {
      return res.status(400).send("Todos los campos son obligatorios");
    }
    await controladorAlquiler.crearAlquiler(
      id,
      usuario_id,
      bicicleta_id,
      recogida_id,
      entrega_id,
      fecha_inicio,
      fecha_fin,
      duracion,
      costo
    );
    res.redirect(`/alquileres/lista`);
  } catch (error) {
    console.error("Error al crear el alquiler", error);
    res.status(500).send("Hubo un error al crear el alquiler");
  }
}

async function actualizarFormularioAlquiler(req, res) {
  const { id } = req.params;

  try {
    const alquiler = await controladorAlquiler.buscarAlquilerPorId(id);

    if (!alquiler) {
      return res.status(404).send("Alquiler no encontrado");
    }

    res.render("alquileres/actualizarAlquiler", { alquiler });
  } catch (error) {
    console.error("Error al cargar el alquiler para editar", error);
    if (!res.headersSent) {
      res.status(500).send("Hubo un error al cargar el alquiler para editar");
    }
  }
}

async function actualizarAlquiler(req, res) {
  const {
    usuario_id,
    bicicleta_id,
    recogida_id,
    entrega_id,
    fecha_inicio,
    fecha_fin,
    duracion,
    costo,
  } = req.body;
  const id = parseInt(req.params.id);

  try {
    const alquilerActualizado = await controladorAlquiler.actualizarAlquiler(
      id,
      usuario_id,
      bicicleta_id,
      recogida_id,
      entrega_id,
      fecha_inicio,
      fecha_fin,
      duracion,
      costo
    );
    console.log("Este es el console log" + alquilerActualizado);
    if (alquilerActualizado) {
      res.redirect("/alquileres/" + id);
    } else {
      res
        .status(404)
        .send("No se pudo actualizar el alquiler. Alquiler no encontrado.");
    }
  } catch (error) {
    console.error("Error al actualizar el alquiler:", error);
    res.status(500).send("Hubo un error al actualizar el alquiler");
  }
}

async function eliminarAlquiler(req, res) {
  const { id } = req.params;
  try {
    await controladorAlquiler.eliminarAlquiler(id);
    res.redirect("/alquileres/lista");
  } catch (error) {
    res.status(500).send("Hubo un error al eliminar el alquiler");
  }
}

export const functions = {
  getAllAlquileres,
  mostrarAlquilerPorId,
  crearFormularioAlquiler,
  crearAlquiler,
  actualizarFormularioAlquiler,
  actualizarAlquiler,
  eliminarAlquiler,
};

export default functions;
