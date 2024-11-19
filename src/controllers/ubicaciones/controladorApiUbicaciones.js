import controladorUbicaciones from "./controladorUbicaciones.js";

async function getAllUbicaciones(req, res) {
  const ubicaciones = await controladorUbicaciones.getAll();
  res.json(ubicaciones);
}

async function buscarUbicacionPorId(req, res) {
  const id = parseInt(req.params.id);
  const ubicacion = await controladorUbicaciones.buscarPorId(id);
  if (!ubicacion) {
    return res.status(404).send("Ubicación no encontrada");
  }
  res.json(ubicacion);
}

async function crearUbicacion(req, res) {
  const { nombre_estacion, direccion, latitud, longitud } = req.body;
  const nuevaUbicacion = await controladorUbicaciones.crear(
    nombre_estacion,
    direccion,
    latitud,
    longitud
  );
  res.json({ ubicacion: nuevaUbicacion });
}

async function actualizarUbicacion(req, res) {
  const { nombre_estacion, direccion, latitud, longitud } = req.body;
  const id = parseInt(req.params.id);
  const ubicacionActualizada = await controladorUbicaciones.actualizarUbicacion(
    id,
    nombre_estacion,
    direccion,
    latitud
  );
  res.json({ ubicacion: ubicacionActualizada });
}

async function eliminarUbicacion(req, res) {
  const id = parseInt(req.params.id);
  const ubicacionEliminada = await controladorUbicaciones.eliminar(id);
  res.json({ ubicacion: ubicacionEliminada });
}


export const functions = {
    getAllUbicaciones,
    buscarUbicacionPorId,
    crearUbicacion,
    actualizarUbicacion,
    eliminarUbicacion
};

export default functions;