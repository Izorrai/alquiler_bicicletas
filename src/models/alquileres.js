import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';
import usuario from './usuarios.js'
import bicicleta from './bicicletas.js'
import ubicacion from './ubicaciones.js'




const Alquiler = sequelize.define("alquileres",{
  alquiler_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    references: {
      key: 'usuario_id'
    }
  },
  bicicleta_id: {
    type: DataTypes.INTEGER,
    references: {
      key: 'bicicleta_id'
    }
  },
  recogida_id: {
    type: DataTypes.INTEGER,
    references: {
      key: 'ubicacion_id'
    }
  },
  entrega_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Ubicacion,
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

export default Alquiler;

// Relaciones
Alquiler.belongsTo(usuario, { foreignKey: 'usuario_id' });
Alquiler.belongsTo(bicicleta, { foreignKey: 'bicicleta_id' });
Alquiler.belongsTo(ubicacion, { foreignKey: 'recogida_id', as: 'recogida' });
Alquiler.belongsTo(ubicacion, { foreignKey: 'entrega_id', as: 'entrega' });


