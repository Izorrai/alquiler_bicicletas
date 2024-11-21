export function generarNumeroFactura() {
  const fecha = new Date();
  const año = fecha.getFullYear();
  const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
  const dia = fecha.getDate().toString().padStart(2, '0');
  const aleatorio = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  
  return `F${año}${mes}${dia}${aleatorio}`;
}