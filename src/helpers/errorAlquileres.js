class ALQUILER_NOT_FOUND extends Error {
  constructor() {
    super("Alquiler not found");
    this.status = 404;
  }
}

class ALQUILER_LIST_ERROR extends Error {
  constructor() {
    super("Error al obtener la lista de alquileres");
    this.status = 500;
  }
}

class ALQUILER_YA_EXISTE extends Error {
  constructor() {
    super("El alquiler ya existe");
    this.status = 409;
  }
}

class ALQUILER_NO_ACTUALIZADO extends Error {
  constructor() {
    super("No se pudo actualizar el alquiler");
    this.status = 500;
  }
}

class ALQUILER_NO_ELIMINADO extends Error {
  constructor() {
    super("No se pudo eliminar el alquiler");
    this.status = 500;
  }
}

export const errors = {
    ALQUILER_NOT_FOUND,
    ALQUILER_LIST_ERROR,
    ALQUILER_YA_EXISTE,
    ALQUILER_NO_ACTUALIZADO,
    ALQUILER_NO_ELIMINADO,
};

export default errors;
