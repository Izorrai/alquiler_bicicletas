// import modeloBicicleta from "../../modelos/modeloBicicleta.js"


function mostrarTodo (req,res){
    //const bicicletas = modeloBicicleta.mostrarTodo();
   //res.render("bicicletas/lista", {bicicletas}); 
  res.send ("aquí deberíamos ver la lista de bicicletas");
  }
  
  function buscarPorId (req,res){
      const id = parseInt(req.params.id);
      //console.log (id,modeloBicicleta.buscarPorId(id));
      //res.json (modeloBicicleta.buscarPorId(id));
      res.send("aquí deberíamos ver las bicicletas que hemos buscado por Id")
  }
  
  function crearFormulario (req,res){
    //res.render ("bicicletas/new", {types:modeloBicicleta.types})
    res.send ("nos debería enseñar el formulario que hemos creado")
  }

  function actualizarFormulario(req,res){
    const formulario = `<form></form>`;
    res.send(formulario);

  }
  function crear(req,res) {
    const {tipo, marca, estado, fecha_registro} = req.body;
    newBicicleta = modeloBicicleta.crear(tipo, marca, estado, fecha_registro);
    res.send ("aquí deberíamos ver la nueva bicicleta que ehemos creado")
    //res.render("bicicleta/show",{bicicleta:newBicicleta})
  }

  function actualizar(req,res){
    const {tipo, marca, estado, fecha_registro} = req.body;
    const id = parseInt(req.params.id);
    //const actualizarBicicleta = modeloBicicleta.actualizar(id, {tipo, marca, estado, fecha_registro})
    //res.json(actualizarBicicleta);
    res.send ("aquí deberíamos ver la actualización de la bicicleta");
  }

  function borrar (req,res){
    const id = parseInt(req.param.id);
    //const borrarBicicleta = modeloBicicleta.borrar(id);
    //res.jason(borrarBicicleta);
    res.send("aquí deberíamos ver que esta vació porque hemos borrado la bicicleta");
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