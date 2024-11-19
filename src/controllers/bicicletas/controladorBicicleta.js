import Bicicleta from "../../models/bicicletas.js";
import errors from "../../helpers/errorBicicletas.js";

async function getAll() {
  const bicicletas = await Bicicleta.findAll();

  if (!bicicletas) throw new errors.BICICLETA_LIST_ERROR();

  return bicicletas;
}

async function buscarPorId(id) {
  const bicicleta = await Bicicleta.findByPk(id);
  if (!bicicleta) throw new errors.BICICLETA_NOT_FOUND();
  return bicicleta;
}

async function crear(marca, tipo, estado) {
  if (!marca || !tipo || !estado) throw new errors.FALTAN_DATOS_BICICLETA();

  const nuevaBicicleta = await Bicicleta.create({
    marca,
    tipo,
    estado,
  });

  if (!nuevaBicicleta) throw new errors.BICICLETA_NO_CREADA();

  return nuevaBicicleta;
}

async function actualizarBicicleta(id, marca, tipo, estado) {
  const bicicleta = await Bicicleta.findByPk(id);

  if (!bicicleta) throw new errors.BICICLETA_NO_ENCONTRADA();

  bicicleta.marca = marca || bicicleta.marca;
  bicicleta.tipo = tipo || bicicleta.tipo;
  bicicleta.estado = estado || bicicleta.estado;

  const nuevaBicicleta = await bicicleta.save();

  if (!nuevaBicicleta) throw new errors.BICICLETA_NO_ACTUALIZADA();

  return nuevaBicicleta;
}

async function eliminar(id) {
  const bicicleta = await Bicicleta.findByPk(id);

  if (!bicicleta) throw new errors.BICICLETA_NOT_FOUND();

  const biciAEliminar = await bicicleta.destroy();

  if (!biciAEliminar) throw new errors.BICICLETA_NO_ELIMINADA();

  return { message: "Bicicleta eliminada correctamente" };
}

export const functions = {
  getAll,
  buscarPorId,
  crear,
  actualizarBicicleta,
  eliminar,
};

export default functions;
