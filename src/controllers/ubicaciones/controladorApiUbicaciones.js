import controladorUbicaciones from "./controladorUbicaciones.js";

async function getAllUbicaciones(req, res) {
  try {
    const ubicaciones = await controladorUbicaciones.getAll();
    res.json(ubicaciones);
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function buscarUbicacionPorId(req, res) {
  try {
    const id = parseInt(req.params.id);
    const ubicacion = await controladorUbicaciones.buscarPorId(id);
    res.json(ubicacion);
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function crearUbicacion(req, res) {
  try {
    const { nombre_estacion, direccion, latitud, longitud } = req.body;
    const nuevaUbicacion = await controladorUbicaciones.crear(
      nombre_estacion,
      direccion,
      latitud,
      longitud
    );
    res.json({ ubicacion: nuevaUbicacion });
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function actualizarUbicacion(req, res) {
  try {
    const { nombre_estacion, direccion, latitud, longitud } = req.body;
    const id = parseInt(req.params.id);
    const ubicacionActualizada =
      await controladorUbicaciones.actualizarUbicacion(
        id,
        nombre_estacion,
        direccion,
        latitud
      );
    res.json({ ubicacion: ubicacionActualizada });
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function eliminarUbicacion(req, res) {
  try {
    const id = parseInt(req.params.id);
    const ubicacionEliminada = await controladorUbicaciones.eliminar(id);
    res.json({ ubicacion: ubicacionEliminada });
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

export const functions = {
  getAllUbicaciones,
  buscarUbicacionPorId,
  crearUbicacion,
  actualizarUbicacion,
  eliminarUbicacion,
};

export default functions;
