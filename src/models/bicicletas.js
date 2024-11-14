
import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';


const Bicicleta = sequelize.define("bicicletas",{
  bicicleta_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  tipo: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  marca: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  estado: {
    type: DataTypes.ENUM('disponible', 'en uso', 'en reparación'),
    defaultValue: 'disponible',
    allowNull: true
  },
  fecha_registro: {
    type: DataTypes.TIMESTAMP,
    defaultValue: DataTypes.NOW,
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'bicicletas',
  timestamps: false
});

export default Bicicleta;


