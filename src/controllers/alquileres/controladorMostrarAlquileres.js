import controladorAlquiler from "../../controllers/alquileres/controladorAlquiler.js";

async function getAllAlquileres(req, res) {
  try {
    const alquileres = await controladorAlquiler.getAllAlquileres();

    res.render("alquileres/listaAlquileres", { alquileres });
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function mostrarAlquilerPorId(req, res) {
  
  try {
    const id = parseInt(req.params.id);
    const alquiler = await controladorAlquiler.buscarAlquilerPorId(id);

    res.render("alquileres/mostrarAlquiler", { alquiler });
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function crearFormularioAlquiler(req, res) {
  try {
    res.render("alquileres/nuevoAlquiler");

  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
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
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function actualizarFormularioAlquiler(req, res) {
  const { id } = req.params;

  try {
    const alquiler = await controladorAlquiler.buscarAlquilerPorId(id);

    res.render("alquileres/actualizarAlquiler", { alquiler });
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
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
    await controladorAlquiler.actualizarAlquiler(
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
    res.redirect('/alquileres/lista');
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function eliminarAlquiler(req, res) {
  const { id } = req.params;
  try {
    await controladorAlquiler.eliminarAlquiler(id);
    res.redirect("/alquileres/lista");
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
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
