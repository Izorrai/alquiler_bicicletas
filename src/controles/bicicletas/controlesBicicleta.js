import modeloBicicleta from "../../modelos/modeloBicicleta.js";



async function mostrarTodo(){
    const bicicletas = await modeloBicicleta.mostrarTodo();
    return bicicletas;
    //res.send ("aquí deberíamos ver la lista de bicicletas");
  }
  
  async function buscarPorId(){
      const bicicleta = await modeloBicicleta.findByPk(id);
      return bicicleta;
      //res.send ("aquí deberíamos ver las bicicletas que hemos buscado por Id")
  }
  

async function crear(tipo,marca,estado,fecha_registro){
    const nuevaBicicleta = await modeloBicicleta.create({
      tipo,
      marca,
      estado,
      fecha_registro,
    });
    return nuevaBicicleta;

    //res.send ("aquí deberíamos ver la nueva bicicleta que ehemos creado")

  }

async function actualizar(tipo, marca, estado, fecha_registro){
    const actualizarBicicleta = await modeloBicicleta.findByPk(id);
    bicicleta.tipo=tipo;
    bicicleta.marca=marca;
    bicicleta.estado=estado;
    bicicleta.fecha_registro=fecha_registro;
    await bicicleta.save();
    return actualizarBicicleta;
 
    //res.send ("aquí deberíamos ver la actualización de la bicicleta");
  }

async function borrar(id){
    const borrarBicicleta = await modeloBicicleta.findByPk(id);
    await borrarBicicleta.destroy();
    return borrarBicicleta;
    
    //res.send("aquí deberíamos ver que esta vació porque hemos borrado la bicicleta");
  }

export const functions = {
    mostrarTodo,
    buscarPorId,
    crear,
    actualizar,
    borrar
}  

export default functions;