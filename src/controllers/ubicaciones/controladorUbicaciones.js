import Ubicacion from "../../models/ubicaciones.js";
import errors from "../../helpers/errorUbicaciones.js";

async function getAll() {
  const ubicaciones = await Ubicacion.findAll();

  if (!ubicaciones) throw new errors.UBICACION_LIST_ERROR();

  return ubicaciones;
}

async function buscarPorId(id) {
  const ubicacion = await Ubicacion.findByPk(id);

  if (!ubicacion) throw new errors.UBICACION_NOT_FOUND();

  return ubicacion;
}

async function crear(nombre_estacion, direccion, latitud, longitud) {
  if (!nombre_estacion || !direccion || !latitud || !longitud) {
    throw new errors.FALTAN_DATOS_UBICACION();
  }

  const nuevaUbicacion = await Ubicacion.create({
    nombre_estacion,
    direccion,
    latitud,
    longitud,
  });

  return nuevaUbicacion;
}

async function actualizarUbicacion(
  id,
  nombre_estacion,
  direccion,
  latitud,
  longitud
) {
  const ubicacion = await Ubicacion.findByPk(id);

  if (!ubicacion) throw new errors.UBICACION_NOT_FOUND();

  ubicacion.nombre_estacion = nombre_estacion || ubicacion.nombre_estacion;
  ubicacion.direccion = direccion || ubicacion.direccion;
  ubicacion.latitud = latitud || ubicacion.latitud;
  ubicacion.longitud = longitud || ubicacion.longitud;

  const ubicacionActualizada = await ubicacion.save();
  if (!ubicacionActualizada) throw new errors.UBICACION_NO_ACTUALIZADA();

  return ubicacionActualizada;
}

async function eliminar(id) {
  const ubicacion = await Ubicacion.findByPk(id);

  if (!ubicacion) throw new errors.UBICACION_NOT_FOUND();

  await ubicacion.destroy();

  return { message: "ubicacion eliminada correctamente" };
}

export const functions = {
  getAll,
  buscarPorId,
  crear,
  actualizarUbicacion,
  eliminar,
};

export default functions;
