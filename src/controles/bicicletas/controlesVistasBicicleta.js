import controlesBicicleta from "../../modelos/modeloBicicleta.js"


const tipos =[

];


async function mostrarTodo(req,res){
    const bicicletas = await modeloBicicleta.mostrarTodo();
    res.render("bicicletas/lista", { bicicletas }); 
  }
  
async function buscarPorId(req,res){
      const id = parseInt(req.params.id);
      const bicicleta = await controlesBicicleta.buscarPorId(id);
      res.render("bicicletas/mostrar",{ bicicleta });
    
  }
  
function crearFormulario(req,res){
    const bicicletas =
     res.render("bicicleta/nueva", { tipos, ingredientes })
  }

async function actualizarFormulario(req, res){
    const id = parseInt(req.params.id);
    const bicicleta = await controlesBicicleta.buscarPorId(id);
    res.render("bicicletas/actualizar", {tipos, bicicleta})

  }
async function crear(req, res) {
    const {tipo, marca, estado, fecha_registro} = req.body;
    await controlesBicicleta.crear(tipo, marca, estado, fecha_registro);
    res.redirect("/bicicleta");
  }

async function actualizar(req, res){
    const {tipo, marca, estado, fecha_registro} = req.body;
    const id = parseInt(req.params.id);
    await controlesBicicleta.actualizar(id,tipo, marca, estado, fecha_registro);
    res.redirect("/bicicleta/" + id);
  }

async function borrar(req, res){
    const id = parseInt(req.param.id);
    await controlesBicicleta.borrar(id);
    res.redirect ("/bicicleta");
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