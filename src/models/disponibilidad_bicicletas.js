import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';
import Bicicleta from './bicicletas.js';
import Ubicacion from './ubicaciones.js';

const DisponibilidadBicicleta = sequelize.define('disponibilidad_bicicleta', {
  disponibilidad_bicicletas_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },  
  estado: {
    type: DataTypes.ENUM('disponible', 'noDisponible'),
    allowNull: false,
  },
  bicicleta_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Bicicleta,  // Referencia explícita al modelo 'Bicicleta'
      key: 'bicicleta_id',
    },
    allowNull: false,  // Se asume que la bicicleta siempre debe estar asociada
  },
  ubicacion_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Ubicacion,  // Referencia explícita al modelo 'Ubicacion'
      key: 'ubicacion_id',
    },
    allowNull: false,  // Se asume que la ubicación siempre debe estar asociada
  }
}, {
  sequelize,
  tableName: 'disponibilidad_bicicletas',
  timestamps: false,  // Si en algún momento necesitas auditoría, habilita timestamps: true
});

// Relación con 'Bicicleta' y 'Ubicacion'
DisponibilidadBicicleta.belongsTo(Bicicleta, { foreignKey: 'bicicleta_id' });
DisponibilidadBicicleta.belongsTo(Ubicacion, { foreignKey: 'ubicacion_id' });

// Relación inversa (si es necesario)
Bicicleta.hasMany(DisponibilidadBicicleta, { foreignKey: 'bicicleta_id' });
Ubicacion.hasMany(DisponibilidadBicicleta, { foreignKey: 'ubicacion_id' });

export default DisponibilidadBicicleta;
