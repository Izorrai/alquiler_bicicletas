import modeloBicicleta from "../../modelos/modeloBicicleta.js"


async function mostrarTodo(req,res){
    const bicicletas = await modeloBicicleta.mostrarTodo();
    res.render("bicicletas/lista", {bicicletas}); 
    
  }
  
async function buscarPorId(){
      const id = parseInt(req.params.id);
      const bicicleta = await modeloBicicleta.findByPk(id);
      res.render("bicicletas/mostrar",{bicicleta});
    
  }
  
function crearFormulario(req,res){
    const bicicletas =
     res.render("bicicletas/nuevo")
  }

async function actualizarFormulario(){
    const id = parseInt(req.params.id);
    const bicicleta = await modeloBicicleta.findByPk(id);
    res.render("bicicletas/actualizar", {types})

  }
async function crear() {
    const {tipo, marca, estado, fecha_registro} = req.body;
    newBicicleta = modeloBicicleta.crear(tipo, marca, estado, fecha_registro);
    res.render("bicicleta/show",{bicicleta:newBicicleta})
  }

async function actualizar(){
    const {tipo, marca, estado, fecha_registro} = req.body;
    const id = parseInt(req.params.id);
    const actualizarBicicleta = modeloBicicleta.actualizar(id, {tipo, marca, estado, fecha_registro})
    res.render(actualizarBicicleta);
  }

async function borrar(){
    const id = parseInt(req.param.id);
    const borrarBicicleta = modeloBicicleta.borrar(id);
    res.render(borrarBicicleta);
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