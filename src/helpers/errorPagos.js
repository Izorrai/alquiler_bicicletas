class PAGO_NOT_FOUND extends Error {
  constructor() {
    super("Pago not found");
    this.status = 404;
  }
}

class PAGO_LIST_ERROR extends Error {
  constructor() {
    super("Error al obtener la lista de pagos");
    this.status = 500;
  }
}

class PAGO_YA_EXISTE extends Error {
  constructor() {
    super("El pago ya existe");
    this.status = 409;
  }
}

class PAGO_NO_ACTUALIZADO extends Error {
  constructor() {
    super("No se pudo actualizar el pago");
    this.status = 500;
  }
}

class PAGO_NO_ELIMINADO extends Error {
  constructor() {
    super("No se pudo eliminar el pago");
    this.status = 500;
  }
}

class FALTAN_DATOS_PAGO extends Error{
    constructor() {
        super("Faltan datos del pago");
        this.status = 400;
    }
}
export const errors = {
    PAGO_NOT_FOUND,
    PAGO_LIST_ERROR,
    PAGO_YA_EXISTE,
    PAGO_NO_ACTUALIZADO,
    PAGO_NO_ELIMINADO,
    FALTAN_DATOS_PAGO,
}

export default errors;