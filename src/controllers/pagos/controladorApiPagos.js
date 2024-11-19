import controladorPago from "./controladorPago.js";

async function getAllPagos(req, res) {
  try {
    const pagos = await controladorPago.getAll();
    res.json(pagos);
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function buscarPorId(req, res) {
  try {
    const id = parseInt(req.params.id);
    const pago = await controladorPago.buscarPorId(id);
    res.json(pago);
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function crearPago(req, res) {
  try {
    const { factura, metodo_pago } = req.body;
    const nuevoPago = await controladorPago.crear(factura, metodo_pago);
    res.json({ pago: nuevoPago });
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function actualizarPago(req, res) {
  try {
    const { factura, metodo_pago } = req.body;
    const id = parseInt(req.params.id);
    const pagoActualizado = await controladorPago.actualizarPago(
      id,
      factura,
      metodo_pago
    );
    res.json({ pago: pagoActualizado });
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function eliminarPago(req, res) {
  try {
    const id = parseInt(req.params.id);
    const pagoAEliminar = await controladorPago.eliminar(id);
    res.json({ pago: pagoAEliminar });
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

export const functions = {
  getAllPagos,
  buscarPorId,
  crearPago,
  actualizarPago,
  eliminarPago,
};

export default functions;
