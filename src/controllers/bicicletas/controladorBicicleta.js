import bicicletas from "../../models/bicicletas.js"
import bicicletaModel from "../../models/bicicletas.js";

async function getAll(){
 
    const bicicletas = await bicicletaModel.findAll()
    return bicicletas;
}

export const functions = {

    getAll
   
}

export default functions