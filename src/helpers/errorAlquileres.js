class ALQUILER_NOT_FOUND extends Error {
  constructor() {
    super("Alquiler no encontrado");
    this.status = 404;
  }
}

class ALQUILER_LIST_ERROR extends Error {
  constructor() {
    super("Error al obtener la lista de alquileres");
    this.status = 500;
  }
}

class ALQUILER_CREAR_ERROR extends Error {
  constructor() {
    super("Error al crear el alquiler");
    this.status = 500;
  }
}

export const errors = {
  ALQUILER_NOT_FOUND,
  ALQUILER_LIST_ERROR,
  ALQUILER_CREAR_ERROR,

};

export default errors;
