import bcrypt from "bcrypt";


async function hashContraseña(contraseña){
    const hash = await bcrypt.hash(contraseña,10);
    return hash;
}

async function verificarContraseña(contraseña,hash){
  const match = await bcrypt.compare(contraseña, hash);
  return match;
}

export {
    hashContraseña,
    verificarContraseña
}