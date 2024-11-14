import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';
import alquiler from './alquileres.js'




const Pago = sequelize.define("pagos",{
  pago_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  alquiler_id: {
    type: DataTypes.INTEGER,
    references: {
      key: 'alquiler_id'
    }
  },
  fecha_pago: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: true
  },
  factura: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  metodo_pago: {
    type: DataTypes.ENUM('tarjeta', 'efectivo', 'transferencia', 'otro'),
    defaultValue: 'efectivo',
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'pagos',
  timestamps: false
});

export default Pago

// Relaciones
Pago.belongsTo(alquiler, { foreignKey: 'alquiler_id' });


