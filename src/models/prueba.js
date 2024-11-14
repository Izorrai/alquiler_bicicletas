import pago from './pagos.js';

pago.findAll()
  .then(bicicletas => {
    console.log(bicicletas);
  })
  .catch(error => {
    console.error('Error al conectar con la base de datos:', error);
  });