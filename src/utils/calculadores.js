export const calcularCosteAlquiler = (bicicleta) => {
  const costoBase = {
      'electrica': 10,
      'montaña': 8,
      'urbana': 5
  };

  return costoBase[bicicleta.tipo.toLowerCase()] || 5;
};

export const calcularDuracion = (fechaInicio, fechaFin) => {
  const inicio = new Date(fechaInicio);
  const fin = new Date(fechaFin);
  return Math.floor((fin - inicio) / (1000 * 60)); // duración en minutos
};