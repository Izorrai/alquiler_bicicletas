import controladorBicicleta from "./controladorBicicleta.js";

async function getAllBicicletas(req, res) {
  try {
    const bicicletas = await controladorBicicleta.getAll();
    res.json(bicicletas);
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function buscarPorId(req, res) {
  try {
    const id = parseInt(req.params.id);
    const bicicleta = await controladorBicicleta.buscarPorId(id);
    res.json(bicicleta);
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function crearBicicleta(req, res) {
  try {
    const { marca, tipo, estado } = req.body;
    const nuevaBicicleta = await controladorBicicleta.crear(
      marca,
      tipo,
      estado
    );
    res.json({ bicicleta: nuevaBicicleta });
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function actualizarBicicleta(req, res) {
  try {
    const { marca, tipo, estado } = req.body;
    const id = parseInt(req.params.id);
    const bicicletaActualizada = await controladorBicicleta.actualizarBicicleta(
      id,
      marca,
      tipo,
      estado
    );
    res.json({ bicicleta: bicicletaActualizada });
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function eliminarBicicleta(req, res) {
  try {
    const id = parseInt(req.params.id);
    const bicicletaAEliminar = await controladorBicicleta.eliminar(id);
    res.json({ bicicleta: bicicletaAEliminar });
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

export const functions = {
  getAllBicicletas,
  buscarPorId,
  crearBicicleta,
  actualizarBicicleta,
  eliminarBicicleta,
};

export default functions;
