import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';


import Usuario from './usuarios.js';
import Bicicleta from './bicicletas.js';
import Ubicacion from './ubicaciones.js';

const Alquiler = sequelize.define("alquileres", {
  alquiler_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'usuarios',
      key: 'usuario_id'
    }
  },
  bicicleta_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'bicicletas',
      key: 'bicicleta_id'
    }
  },
  recogida_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'ubicaciones',
      key: 'ubicacion_id'
    }
  },
  entrega_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'ubicaciones',
      key: 'ubicacion_id'
    },
    allowNull: true
  },
  fecha_inicio: {
    type: DataTypes.DATE,
    allowNull: true
  },
  fecha_fin: {
    type: DataTypes.DATE,
    allowNull: true
  },
  duracion: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  costo: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'alquileres',
  timestamps: false
});


Alquiler.belongsTo(Usuario, { foreignKey: 'usuario_id' });
Alquiler.belongsTo(Bicicleta, { foreignKey: 'bicicleta_id' });
Alquiler.belongsTo(Ubicacion, { foreignKey: 'recogida_id', as: 'recogida' });
Alquiler.belongsTo(Ubicacion, { foreignKey: 'entrega_id', as: 'entrega' });

Usuario.hasMany(Alquiler, { foreignKey: "usuario_id" });

export default Alquiler;
