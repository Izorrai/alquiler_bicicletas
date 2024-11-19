class UBICACION_NOT_FOUND extends Error {
  constructor() {
    super("Ubicación no encontrada");
    this.status = 404;
  }
}

class UBICACION_LIST_ERROR extends Error {
  constructor() {
    super("Error al obtener la lista de ubicaciones");
    this.status = 500;
  }
}

class UBICACION_YA_EXISTE extends Error {
  constructor() {
    super("La ubicación ya existe");
    this.status = 409;
  }
}

class UBICACION_NO_ACTUALIZADA extends Error {
  constructor() {
    super("No se pudo actualizar la ubicación");
    this.status = 500;
  }
}

class UBICACION_NO_ELIMINADA extends Error {
  constructor() {
    super("No se pudo eliminar la ubicación");
    this.status = 500;
  }
}
class FALTAN_DATOS_UBICACION extends Error {
  constructor() {
    super("Faltan datos de la ubicación");
    this.status = 400;
  }
}
export const errors = {
  UBICACION_NOT_FOUND,
  UBICACION_LIST_ERROR,
  UBICACION_YA_EXISTE,
  UBICACION_NO_ACTUALIZADA,
  UBICACION_NO_ELIMINADA,
  FALTAN_DATOS_UBICACION,
};

export default errors;
