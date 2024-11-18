import controladorAlquiler from "./controladores/alquileres/controladorAlquiler.js";

async function getAllAlquileres(req, res) {
  const alquileres = await controladorAlquiler.getAllAlquileres();
  res.json(alquileres);
}

async function buscarAlquilerPorId(req, res) {
  const id = parseInt(req.params.id);
  const alquiler = await controladorAlquiler.buscarAlquilerPorId(id);
  res.json(alquiler);
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
}

async function eliminarAlquiler(req, res) {
  const id = parseInt(req.params.id);
  const alquilerAEliminar = await controladorAlquiler.eliminarAlquiler(id);
  res.json({ alquiler: alquilerAEliminar });
}

export const functions = {
  getAllAlquileres,
  buscarAlquilerPorId,
  crearAlquiler,
  actualizarAlquiler,
  eliminarAlquiler,
};

export default functions;
