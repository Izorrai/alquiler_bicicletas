import controladorBicicleta from "./controllers/bicicletas/controladorBicicleta.js";

async function getAllBicicletas(req, res) {
  const bicicletas = await controladorBicicleta.getAll();
  res.json(bicicletas);
}

async function buscarPorId(req, res) {
  const id = parseInt(req.params.id);
  const bicicleta = await controladorBicicleta.buscarPorId(id);
  res.json(bicicleta);
}

async function crearBicicleta(req, res) {
  const { marca, tipo, estado } = req.body;
  const nuevaBicicleta = await controladorBicicleta.crear(marca, tipo, estado);
  res.json({ bicicleta: nuevaBicicleta });
}

async function actualizarBicicleta(req, res) {
  const { marca, tipo, estado } = req.body;
  const id = parseInt(req.params.id);
  const bicicletaActualizada = await controladorBicicleta.actualizarBicicleta(
    id,
    marca,
    tipo,
    estado
  );
  res.json({ bicicleta: bicicletaActualizada });
}

async function eliminarBicicleta(req, res) {
  const id = parseInt(req.params.id);
  const bicicletaAEliminar = await controladorBicicleta.eliminar(id);
  res.json({ bicicleta: bicicletaAEliminar });
}

export const functions = {
    getAllBicicletas,
    buscarPorId,
    crearBicicleta,
    actualizarBicicleta,
    eliminarBicicleta,
  };

  export default functions;
