import controladorAlquiler from "./controladorAlquiler.js";

async function getAllAlquileres(req, res) {
  try {
    const alquileres = await controladorAlquiler.getAllAlquileres();
    res.json(alquileres);
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function buscarAlquilerPorId(req, res) {
  try {
    const id = parseInt(req.params.id);
    const alquiler = await controladorAlquiler.buscarAlquilerPorId(id);
    res.json(alquiler);
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function crearAlquiler(req, res) {
  try {
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
    const nuevoAlquiler = await controladorAlquiler.crearAlquiler(
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
    res.json({ alquiler: nuevoAlquiler });
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function actualizarAlquiler(req, res) {
  try {
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
    res.json({ alquiler: alquilerActualizado });
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function eliminarAlquiler(req, res) {
  try {
    const id = parseInt(req.params.id);
    const alquilerAEliminar = await controladorAlquiler.eliminarAlquiler(id);
    res.json({ alquiler: alquilerAEliminar });
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

export const functions = {
  getAllAlquileres,
  buscarAlquilerPorId,
  crearAlquiler,
  actualizarAlquiler,
  eliminarAlquiler,
};

export default functions;
