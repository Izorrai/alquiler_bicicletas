import Bicicleta from "../../models/bicicletas.js"


async function getAll(){
 
    const bicicleta = await Bicicleta.findAll()
    return bicicleta;
}

export const functions = {

    getAll
   
}

export default functions;


