class BICICLETA_NOT_FOUND extends Error {
  constructor() {
    super("Bicicleta not found");
    this.status = 404;
  }
}

class BICICLETA_LIST_ERROR extends Error {
  constructor() {
    super("Error al obtener la lista de bicicletas");
    this.status = 500;
  }
}

class BICICLETA_YA_EXISTE extends Error {
  constructor() {
    super("La bicicleta ya existe");
    this.status = 409;
  }
}

class BICICLETA_NO_ACTUALIZADA extends Error {
  constructor() {
    super("No se pudo actualizar la bicicleta");
    this.status = 500;
  }
}

class BICICLETA_NO_ELIMINADA extends Error {
  constructor() {
    super("No se pudo eliminar la bicicleta");
    this.status = 500;
  }
}

class FALTAN_DATOS_BICICLETA extends Error {
  constructor() {
    super("Faltan datos de la bicicleta");
    this.status = 400;
  }
}

class BICICLETA_NO_CREADA extends Error {
  constructor() {
    super("No se pudo crear la bicicleta, porquqe faltan datos obligatorios");
    this.status = 500;
  }
}

export const errors = {
  BICICLETA_NOT_FOUND,
  BICICLETA_LIST_ERROR,
  BICICLETA_YA_EXISTE,
  BICICLETA_NO_ACTUALIZADA,
  BICICLETA_NO_ELIMINADA,
  FALTAN_DATOS_BICICLETA,
  BICICLETA_NO_CREADA,
};

export default errors;
