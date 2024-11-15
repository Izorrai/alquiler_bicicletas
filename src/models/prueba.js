import pago from './pagos.js';

pago.findAll()
  .then(pagos => {
    console.log(pagos);
  })
  .catch(error => {
    console.error('Error al conectar con la base de datos:', error);
  });