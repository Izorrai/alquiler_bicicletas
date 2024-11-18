import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';



const Ubicacion = sequelize.define("ubicacion",{
  ubicacion_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: true,
    autoIncrement: true
  },
  nombre_estacion: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  direccion: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  latitud: {
    type: DataTypes.DECIMAL(10, 8),
    allowNull: true
  },
  longitud: {
    type: DataTypes.DECIMAL(11, 8),
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'ubicaciones',
  timestamps: false
});

export default Ubicacion;
