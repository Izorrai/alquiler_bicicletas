import controladorPago from "../../controllers/pagos/controladorPago.js";

async function getAll(req, res) {
  try {
    const pagos = await controladorPago.getAll();
    res.render("pagos/listaPagos", { pagos });
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function mostrarPorId(req, res) {
  const id = parseInt(req.params.id);
  try {
    const pago = await controladorPago.buscarPorId(id);
    res.render("pagos/mostrarPago", { pago });
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function crearFormulario(req, res) {
  try {
    res.render("pagos/nuevoPago");
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function crear(req, res) {
  const { factura, metodo_pago } = req.body;

  try {
    await controladorPago.crear(factura, metodo_pago);
    res.redirect(`/pagos/lista`);
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function actualizarFormPago(req, res) {
  const { id } = req.params;

  try {
    const pago = await controladorPago.buscarPorId(id);

    res.render("pagos/actualizarPago", { pago });
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function actualizarPago(req, res) {
  const { alquiler_id, factura, metodo_pago } = req.body;
  const id = parseInt(req.params.id);
  try {
    await controladorPago.actualizarPago(alquiler_id, factura, metodo_pago);
    res.redirect("/pagos/" + id);
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function eliminar(req, res) {
  const { id } = req.params;
  try {
    await controladorPago.eliminar(id);
    res.redirect("/pagos/lista");
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

export const functions = {
  getAll,
  crearFormulario,
  mostrarPorId,
  crear,
  actualizarFormPago,
  actualizarPago,
  eliminar,
};

export default functions;
