import modeloBicicleta from "../../modelos/modeloBicicleta.js"


async function mostrarTodo(req,res){
    const bicicletas = await modeloBicicleta.mostrarTodo();
    res.json("bicicletas/lista", {bicicletas}); 
    
  }
  
async function buscarPorId(){
      const id = parseInt(req.params.id);
      const bicicleta = await modeloBicicleta.findByPk(id);
      res.json("bicicletas/mostrar",{bicicleta});
    
  }

async function actualizarFormulario(){
    const id = parseInt(req.params.id);
    const bicicleta = await modeloBicicleta.findByPk(id);
    res.json("bicicletas/actualizar", {types})

  }
async function crear() {
    const {tipo, marca, estado, fecha_registro} = req.body;
    newBicicleta = modeloBicicleta.crear(tipo, marca, estado, fecha_registro);
    res.json("bicicleta/show",{bicicleta:newBicicleta})
  }

async function actualizar(){
    const {tipo, marca, estado, fecha_registro} = req.body;
    const id = parseInt(req.params.id);
    const actualizarBicicleta = modeloBicicleta.actualizar(id, {tipo, marca, estado, fecha_registro})
    res.json(actualizarBicicleta);
  }

  async function borrar(){
    const id = parseInt(req.param.id);
    const borrarBicicleta = modeloBicicleta.borrar(id);
    res.json(borrarBicicleta);
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