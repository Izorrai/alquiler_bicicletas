
import Usuario from "../../models/usuarios.js";
import Alquiler from "../../models/alquileres.js";
import Pago from "../../models/pagos.js";

async function buscarFacturas() {
    try {
      const facturas = await Usuario.buscarFacturas({
        include: [
          {
            model: Alquiler,
            include: [
              {
                model: Pago,
                attributes: ['factura']
              }
            ]
          }
        ]
      });
      return facturas;  
    } catch (error) {
      console.error('Error al obtener facturas:', error);
      throw new Error('No se pudieron obtener las facturas');
    }
  }
  
    
      
   
      
      export default buscarFacturas;
    
    
