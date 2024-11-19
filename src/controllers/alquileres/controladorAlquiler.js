import Alquiler from "../../models/alquileres.js";
import errors from "../../helpers/errorAlquileres.js";

async function getAllAlquileres() {
  const alquileres = await Alquiler.findAll();

  if (!alquileres) throw new errors.ALQUILER_LIST_ERROR;

  return alquileres;
}

async function buscarAlquilerPorId(id) {
  const alquiler = await Alquiler.findByPk(id);

  if (!alquiler) throw new errors.ALQUILER_NOT_FOUND;

  return alquiler;
}

async function crearAlquiler(
  id,
  usuario_id,
  bicicleta_id,
  recogida_id,
  entrega_id,
  fecha_inicio,
  fecha_fin,
  duracion,
  costo
) {
  const nuevoAlquiler = await Alquiler.create({
    id,
    usuario_id,
    bicicleta_id,
    recogida_id,
    entrega_id,
    fecha_inicio,
    fecha_fin,
    duracion,
    costo,
  });
  if (!nuevoAlquiler) throw new errors.ALQUILER_YA_EXISTE;

  return nuevoAlquiler;
}

async function actualizarAlquiler(
  id,
  usuario_id,
  bicicleta_id,
  recogida_id,
  entrega_id,
  fecha_inicio,
  fecha_fin,
  duracion,
  costo
) {
  const alquiler = await Alquiler.findByPk(id);

  if (!alquiler) throw new errors.ALQUILER_NOT_FOUND;

  alquiler.usuario_id = usuario_id || alquiler.usuario_id;
  alquiler.bicicleta_id = bicicleta_id || alquiler.bicicleta_id;
  alquiler.recogida_id = recogida_id || alquiler.recogida_id;
  alquiler.entrega_id = entrega_id || alquiler.entrega_id;
  alquiler.fecha_inicio = fecha_inicio || alquiler.fecha_inicio;
  alquiler.fecha_fin = fecha_fin || alquiler.fecha_fin;
  alquiler.duracion = duracion || alquiler.duracion;
  alquiler.costo = costo || alquiler.costo;

  await alquiler.save();
  return alquiler;
}

async function eliminarAlquiler(id) {
  const alquiler = await Alquiler.findByPk(id);

  if (!alquiler) throw new errors.ALQUILER_NOT_FOUND;

  await alquiler.destroy();
  return { message: "Alquiler eliminado correctamente" };
}

export const functions = {
  getAllAlquileres,
  buscarAlquilerPorId,
  crearAlquiler,
  actualizarAlquiler,
  eliminarAlquiler,
};

export default functions;
