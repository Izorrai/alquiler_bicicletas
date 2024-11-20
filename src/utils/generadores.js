async function calcularCostoAlquiler(bicicleta) {
    if (!bicicleta || !bicicleta.tipo) {
      throw new Error('Datos de bicicleta inválidos');
    }
  
    const precioBase = 10;
    const multiplicadores = {
      'electrica': 1.5,
      'montana': 1.2,
      'urbana': 1.0
    };
  
    const multiplicador = multiplicadores[bicicleta.tipo] || 1.0;
    return Number((precioBase * multiplicador).toFixed(2));
  }
  
  export function calcularDuracion(fechaInicio, fechaFin) {
    if (!(fechaInicio instanceof Date) || !(fechaFin instanceof Date)) {
      fechaInicio = new Date(fechaInicio);
      fechaFin = new Date(fechaFin);
    }
  
    if (isNaN(fechaInicio.getTime()) || isNaN(fechaFin.getTime())) {
      throw new Error('Fechas inválidas');
    }
  
    const duracionHoras = (fechaFin - fechaInicio) / (1000 * 60 * 60);
    return Number(duracionHoras.toFixed(2));
  }


  export default calcularCostoAlquiler;