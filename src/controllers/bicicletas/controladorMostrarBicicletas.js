import controladorBicicleta from "../../controllers/bicicletas/controladorBicicleta.js"
//import Bicicleta from "../../models/bicicletas.js"

async function getAll(req, res) {
    const bicicletas = await controladorBicicleta.getAll()
    //const bicicletas = await Bicicleta.getAll()
   console.log(bicicletas);
    res.render("bicicletas/mostrarBicicletas", {bicicletas})
   
}

async function crearFormulario(req, res) {
   res.render("bicicletas/nuevaBicicleta")
}


async function crear(req, res) {
    const { marca,tipo,estado } = req.body;
    await controladorBicicleta.crear(marca,tipo,estado)
    res.redirect("/bicicletas");
}


export const functions = {
    getAll,
    crearFormulario,
    crear
}

export default functions


