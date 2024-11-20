import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';

const Alquiler = sequelize.define("alquileres", {
  alquiler_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'usuarios', // Referencia usando el nombre de la tabla (no el modelo)
      key: 'usuario_id'
    }
  },
  bicicleta_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'bicicletas', // Referencia usando el nombre de la tabla (no el modelo)
      key: 'bicicleta_id'
    }
  },
  recogida_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'ubicaciones', // Referencia usando el nombre de la tabla (no el modelo)
      key: 'ubicacion_id'
    }
  },
  entrega_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'ubicaciones', // Referencia usando el nombre de la tabla (no el modelo)
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

Alquiler.associate = function(models) {
  Alquiler.belongsTo(models.Usuario, { foreignKey: 'usuario_id' });
  Alquiler.belongsTo(models.Bicicleta, { foreignKey: 'bicicleta_id' });
  Alquiler.belongsTo(models.Ubicacion, { foreignKey: 'recogida_id', as: 'recogida' });
  Alquiler.belongsTo(models.Ubicacion, { foreignKey: 'entrega_id', as: 'entrega' });
};

export default Alquiler;
