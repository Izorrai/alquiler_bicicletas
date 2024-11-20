class USER_NOT_FOUND extends Error {
  constructor() {
    super("User not found");
    this.status = 404;
  }
}

class FALTAN_DATOS_USUARIO extends Error {
  constructor() {
    super("Faltan datos del usuario");
    this.status = 400;
  }
}

class USER_LIST_ERROR extends Error {
  constructor() {
    super("Error al obtener la lista de usuarios");
    this.status = 500;
  }
}

class USUARIO_NO_CREADO extends Error {
  constructor() {
    super("No se pudo crear el usuario");
    this.status = 500;
  }
}

export const errors = {
  USER_NOT_FOUND,
  USER_LIST_ERROR,
  FALTAN_DATOS_USUARIO,
  USUARIO_NO_CREADO,
};

export default errors;
