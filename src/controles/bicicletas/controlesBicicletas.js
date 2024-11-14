import modeloBicicleta from "../../modelos/modeloBicicleta.js"


async function mostrarTodo(){
    const bicicletas = await modeloBicicleta.mostrarTodo();
    return bicicletas;
    //res.send ("aquí deberíamos ver la lista de bicicletas");
  }
  
  async function buscarPorId(){
      const id = parseInt(req.params.id);
      const bicicleta = await modeloBicicleta.findByPk(id);
      return bicicleta;
      //res.send ("aquí deberíamos ver las bicicletas que hemos buscado por Id")
  }
  

async function actualizarFormulario(){
    const id = parseInt(req.params.id);
    const bicicleta = await modeloBicicleta.findByPk(id);
    return bicicleta;


  }
async function crear() {
    const {tipo,marca,estado,fecha_registro} = req.body;
    const nuevaBicicleta = await modeloBicicleta.crear({
      tipo,
      marca,
      estado,
      fecha_registro,
    });
    await nuevaBicicleta
    return nuevaBicicleta;

    //res.send ("aquí deberíamos ver la nueva bicicleta que ehemos creado")

  }

function actualizar(){
    const {tipo, marca, estado, fecha_registro} = req.body;
    const id = parseInt(req.params.id);
    const actualizarBicicleta = modeloBicicleta.actualizar(id, {tipo, marca, estado, fecha_registro});
    return actualizarBicicleta;
 
    //res.send ("aquí deberíamos ver la actualización de la bicicleta");
  }

function borrar(){
    const id = parseInt(req.param.id);
    const borrarBicicleta = modeloBicicleta.borrar(id);
    return borrarBicicleta;
    
    //res.send("aquí deberíamos ver que esta vació porque hemos borrado la bicicleta");
  }

export const functions = {
    mostrarTodo,
    buscarPorId,
    crear,
    crearFormulario,
    actualizarFormulario,
    actualizar,
    borrar
}  

export default functions;