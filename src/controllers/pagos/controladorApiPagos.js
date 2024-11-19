import controladorPago from "./controladorPago.js";

async function getAllPagos(req, res) {
  const pagos = await controladorPago.getAll();
  res.json(pagos);
}

async function buscarPorId(req, res) {
  const id = parseInt(req.params.id);
  const pago = await controladorPago.buscarPorId(id);
  res.json(pago);
}

async function crearPago(req, res) {
  const { factura, metodo_pago } = req.body;
  const nuevoPago = await controladorPago.crear(factura, metodo_pago);
  res.json({ pago: nuevoPago });
}

async function actualizarPago(req, res) {
  const { factura, metodo_pago } = req.body;
  const id = parseInt(req.params.id);
  const pagoActualizado = await controladorPago.actualizarPago(
    id,
    factura,
    metodo_pago
  );
  res.json({ pago: pagoActualizado });
}

async function eliminarPago(req, res) {
  const id = parseInt(req.params.id);
  const pagoAEliminar = await controladorPago.eliminar(id);
  res.json({ pago: pagoAEliminar });
}

export const functions = {
    getAllPagos,
    buscarPorId,
    crearPago,
    actualizarPago,
    eliminarPago,
  };

  export default functions;
