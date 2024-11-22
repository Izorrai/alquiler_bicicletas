import controladorUbicacion from "../../controllers/ubicaciones/controladorUbicaciones.js";

async function getAll(req, res) {
  try {
    const ubicaciones = await controladorUbicacion.getAll();
    //console.log(ubicaciones);
    res.render("ubicaciones/listaUbicaciones", { ubicaciones });
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function mostrarPorId(req, res) {
  try {
    const id = parseInt(req.params.id);
    const ubicacion = await controladorUbicacion.buscarPorId(id);

    res.render("ubicaciones/mostrarUbicacionesPorId", { ubicacion });
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function crearFormulario(req, res) {
  try {
    res.render("ubicaciones/nuevaUbicacion");
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function crear(req, res) {
  try {
    const { nombre_estacion, direccion, latitud, longitud } = req.body;

    await controladorUbicacion.crear(
      nombre_estacion,
      direccion,
      latitud,
      longitud
    );
    res.redirect(`/ubicaciones/lista`);
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function actualizarFormUbicacion(req, res) {
  try {
    const { id } = req.params;
    const ubicacion = await controladorUbicacion.buscarPorId(id); // Obtener la ubicacion por id

    res.render("ubicaciones/actualizarUbicacion", { ubicacion });
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function actualizarUbicacion(req, res) {
  try {
    const { nombre_estacion, direccion, latitud, longitud } = req.body;
    const id = parseInt(req.params.id);

    await controladorUbicacion.actualizarUbicacion(
      id,
      nombre_estacion,
      direccion,
      latitud,
      longitud
    );

    res.redirect(`/ubicaciones/lista`);
  } catch (error) {
    error.status ? res.status(error.status) : res.status(500);
    res.json({ error: error.message });
  }
}

async function eliminar(req, res) {
  try {
    const { id } = req.params;
    await controladorUbicacion.eliminar(id);
    res.redirect("/ubicaciones/lista");
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
  actualizarFormUbicacion,
  actualizarUbicacion,
  eliminar,
};

export default functions;
