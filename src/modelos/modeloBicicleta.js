import { DataTypes } from "sequelize";
import { Sequelize } from "../config/Sequelize,js";

const Bicicleta = Sequelize.define ('bicicleta',{
    bicicleta_id:{
        tipo: DataTypes.INTEGER.UNSIGNED,

    },

    tipo:{
    
    },
    
    marca:{

    },

    estado:{

    },
    fecha_registro:{

    }
})