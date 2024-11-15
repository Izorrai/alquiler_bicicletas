import controladorBicicleta from "../../controllers/bicicletas/controladorBicicleta.js"
//import Bicicleta from "../../models/bicicletas.js"

async function getAll(req, res) {
    const bicicletas = await controladorBicicleta.getAll()
    //const bicicletas = await Bicicleta.getAll()
   console.log(bicicletas);
    res.render("bicicletas/mostrarBicicletas", {bicicletas})
   
}


export const functions = {
    getAll
}

export default functions


