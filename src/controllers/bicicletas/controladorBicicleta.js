import Bicicleta from "../../models/bicicletas.js"


async function getAll(){
 
    const bicicleta = await Bicicleta.findAll()
    return bicicleta;
}

async function crear(marca,tipo,estado){
    const nuevaBicicleta = await Bicicleta.create({
      marca,
      tipo,
      estado
    });
    
   return nuevaBicicleta;
}

export const functions = {

    getAll,
    crear
   
}

export default functions;


