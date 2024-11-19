import Pago from "../../models/pagos.js";
import errors from "../../helpers/errorPagos.js";

async function getAll() {
  const pagos = await Pago.findAll();

  if (!pagos) throw new errors.PAGO_LIST_ERROR();

  return pagos;
}

async function buscarPorId(id) {
  const pago = await Pago.findByPk(id);

  if (!pago) throw new errors.PAGO_NOT_FOUND();

  return pago;
}

async function crear(factura, metodo_pago) {
  if (!factura || !metodo_pago) throw new errors.FALTAN_DATOS_PAGO();

  const nuevoPago = await Pago.create({
    factura,
    metodo_pago,
  });

  if (!nuevoPago) throw new errors.PAGO_YA_EXISTE();

  return nuevoPago;
}

async function actualizarPago(id, factura, metodo_pago) {
  const pago = await Pago.findByPk(id);

  if (!pago) throw new errors.PAGO_NOT_FOUND();

  pago.factura = factura || pago.factura;
  pago.metodo_pago = metodo_pago || pago.metodo_pago;

  await pago.save();

  return pago;
}

async function eliminar(id) {
  const pago = await Pago.findByPk(id);

  if (!pago) throw new errors.PAGO_NOT_FOUND();

  await pago.destroy();

  return { message: "pago eliminada correctamente" };
}

export const functions = {
  getAll,
  buscarPorId,
  crear,
  actualizarPago,
  eliminar,
};

export default functions;
