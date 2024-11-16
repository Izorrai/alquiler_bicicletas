import controlesBicicleta from "../../modelos/modeloBicicleta.js";


async function mostrarTodo(req,res){
    const bicicletas = await modeloBicicleta.mostrarTodo();
    res.json(bicicletas); 
    
  }
  
async function buscarPorId(req,res){
      const id = parseInt(req.params.id);
      const bicicleta = await modeloBicicleta.buscarPorId(id);
      res.json(bicicleta);
    
  }

async function crear(req,res) {
    const {tipo, marca, estado, fecha_registro} = req.body;
    const newBicicleta = await modeloBicicleta.crear(tipo, marca, estado, fecha_registro);
    res.json({bicicleta:newBicicleta});
  }

async function actualizar(req,res){
    const {tipo, marca, estado, fecha_registro} = req.body;
    const id = parseInt(req.params.id);
    const actualizarBicicleta = modeloBicicleta.actualizar(id,tipo, marca, estado, fecha_registro);
    res.json({bicicleta:actualizarBicicleta});
  }

  async function borrar(req,res){
    const id = parseInt(req.param.id);
    const borrarBicicleta = await modeloBicicleta.borrar(id);
    res.json({bicicleta:actualizarBicicleta});
  }

export const functions = {
    mostrarTodo,
    buscarPorId,
    crear,
    actualizar,
    borrar
}  

export default functions;