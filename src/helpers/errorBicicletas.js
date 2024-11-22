class BICICLETA_NOT_FOUND extends Error {
  constructor() {
    super("Bicicleta no encontrada");
    this.status = 404;
  }
}

class BICICLETA_LIST_ERROR extends Error {
  constructor() {
    super("Error al obtener la lista de bicicletas");
    this.status = 500;
  }
}

class FALTAN_DATOS_BICICLETA extends Error {
  constructor() {
    super("Faltan datos de la bicicleta");
    this.status = 400;
  }
}
class ERROR_AL_CREAR_BICICLETA extends Error {
  constructor() {
    super("Error al crear la bicicleta");
    this.status = 500;
  }
}
class ERROR_AL_ELIMINAR_BICICLETA extends Error {
  constructor() {
    super("Error al eliminar la bicicleta");
    this.status = 500;
  }
}

export const errors = {
  BICICLETA_NOT_FOUND,
  BICICLETA_LIST_ERROR,
  FALTAN_DATOS_BICICLETA,
  ERROR_AL_CREAR_BICICLETA,
  ERROR_AL_ELIMINAR_BICICLETA,
};

export default errors;
