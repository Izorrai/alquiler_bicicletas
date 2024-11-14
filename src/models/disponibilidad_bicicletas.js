import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';
import bicicleta from './bicicletas.js'
import ubicacion from './ubicaciones.js'



const DisponibilidadBicicleta = sequelize.define("disponibilidad_bicicleta",{
  estado: {
    type: DataTypes.ENUM('disponible', 'noDisponible'),
    allowNull: false
  },
  bicicleta_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Bicicleta,
      key: 'bicicleta_id'
    }
  },
  ubicacion_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Ubicacion,
      key: 'ubicacion_id'
    }
  }
}, {
  sequelize,
  tableName: 'disponibilidad_bicicletas',
  timestamps: false
});


export default DisponibilidadBicicleta;
// Relaciones
DisponibilidadBicicleta.belongsTo(bicicleta, { foreignKey: 'bicicleta_id' });
DisponibilidadBicicleta.belongsTo(ubicacion, { foreignKey: 'ubicacion_id' });


