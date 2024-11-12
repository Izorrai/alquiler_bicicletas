function mostrarTodas (req,res){
    //const bicicletas = modeloBicicletas.mostrarTodas();
   //res.render("bicicletas/lista", {bicicletas}); 
  res.send ("aquí deberíamos ver la lista de bicicletas");
  }
  
  function buscarPorId (req,res){
      const id = parseInt(req.params.id);
      //console.log (id,modeloBicicletas.buscarPorId(id));
      //res.json (modeloBicicletas.buscarPorId(id));
      res.send("aquí deberíamos ver las bicicletas que hemos buscado por Id")
  }
  
  function crearFormulario (req,res){
    //res.render ("bicicletas/new", {types:modeloBicicletas.types})
    res.send ("nos debería enseñar el formulario que hemos creado")
  }

  function actualizarFormulario(req,res){
    const formulario = `<form></form>`;

  }

  