class PAGO_NOT_FOUND extends Error {
  constructor() {
    super("Este pago no existe");
    this.status = 404;
  }
}

class PAGO_LIST_ERROR extends Error {
  constructor() {
    super("Error al obtener la lista de pagos");
    this.status = 500;
  }
}
class ERROR_AL_CREAR_PAGO extends Error {
  constructor() {
    super("Error al crear el pago");
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
    ERROR_AL_CREAR_PAGO,
    FALTAN_DATOS_PAGO,
}

export default errors;