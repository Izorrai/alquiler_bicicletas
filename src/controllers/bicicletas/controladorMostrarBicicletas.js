import controladorBicicleta from "../../controllers/bicicletas/controladorBicicleta.js";

async function getAll(req, res) {
  try {
    const bicicletas = await controladorBicicleta.getAll();
    res.render("bicicletas/listaBicicletas", { bicicletas });
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function mostrarPorId(req, res) {
  const id = parseInt(req.params.id);
  try {
    const bicicleta = await controladorBicicleta.buscarPorId(id);
    if (!bicicleta) {
      return res.status(404).send("Bicicleta no encontrada");
    }
    res.render("bicicletas/mostrarBicicletaPorId", { bicicleta });
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function crearFormulario(req, res) {
  try {
    res.render("bicicletas/nuevaBicicleta");
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function crear(req, res) {
  try {
    const { marca, tipo, estado } = req.body;

    await controladorBicicleta.crear(marca, tipo, estado);
    res.redirect("/bicicletas/lista");
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function actualizarFormBicicleta(req, res) {
  try {
    const { id } = req.params;
    const bicicleta = await controladorBicicleta.buscarPorId(id); // Obtener la bicicleta por id

    res.render("bicicletas/actualizarBicicleta", { bicicleta });
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
    res.redirect(`/bicicletas/${id}/actualizar`);
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function eliminar(req, res) {
  try {
    const { id } = req.params;
    await controladorBicicleta.eliminar(id);
    res.redirect("/bicicletas/lista"); // Redirigir a la lista después de eliminar
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
  actualizarFormBicicleta,
  actualizarBicicleta,
  eliminar,
};

export default functions;
