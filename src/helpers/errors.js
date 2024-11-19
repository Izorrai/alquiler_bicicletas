class USER_NOT_FOUND extends Error {
    constructor(){
        super("Usuario no encontrado");
        this.satus=404;
    }

}

class USER_ALREDY_EXISTS extends Error{
    constructor(){
        super ("El usuario ya existe");
        this.status=409;
    }
}

class EMAIL_ALREDY_EXISTS extends Error{
    constructor(){
        super ("El email ya existe");
        this.status=409;
    }
}

class INVALID_CREDENTIALS extends Error{
    constructor(){
        super ("Credenciales invalidas");
        this.status=400;
    }
}

export const errors={
    USER_NOT_FOUND,
    USER_ALREDY_EXISTS,
    EMAIL_ALREDY_EXISTS,
    INVALID_CREDENTIALS
}

export default errors;