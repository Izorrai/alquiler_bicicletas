import Alquiler from "../../models/alquileres.js";

async function getAllAlquileres() {
  try {
    const alquileres = await Alquiler.findAll();
    return alquileres;
  } catch (error) {
    console.error("Error al obtener alquileres", error);
  }
}

async function buscarAlquilerPorId(id) {
  try {
    const alquiler = await Alquiler.findByPk(id);
    return alquiler;
  } catch (error) {
    console.error("Error al buscar el alquiler por ID", error);
  }
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
  costo) {
  try {
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

    return nuevoAlquiler;
  } catch (error) {
    console.error("Error al crear alquiler: ", error);
  }
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
  try {
    const alquiler = await Alquiler.findByPk(id);
    if (!alquiler) {
      throw new Error("Alquiler no encontrado");
    }
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
  } catch (error) {
    console.error("Error al actualizar alquiler:", error);
    throw new Error("No se pudo actualizar el alquiler");
  }
}

async function eliminarAlquiler(id) {
  try {
    const alquiler = await Alquiler.findByPk(id);

    if (!alquiler) {
      throw new Error("Alquiler para eliminar no encontrado");
    }

    await alquiler.destroy();
    return { message: "Alquiler eliminado correctamente" };
  } catch (error) {
    console.error("Error al eliminar el alquiler: ", error);
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
