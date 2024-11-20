import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';
import Alquiler from './alquileres.js';

const Pago = sequelize.define("pagos", {
  pago_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  alquiler_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Alquiler,  // Referencia explícita al modelo 'Alquiler'
      key: 'alquiler_id',
    },
    allowNull: false,  // Se asume que siempre debe estar asociado a un alquiler
  },
  fecha_pago: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,  // El valor por defecto es la fecha actual
    allowNull: false,  // No permitimos null para la fecha de pago
  },
  factura: {
    type: DataTypes.INTEGER,
    allowNull: false,  // La factura es obligatoria
  },
  metodo_pago: {
    type: DataTypes.ENUM('tarjeta', 'efectivo', 'transferencia', 'otro'),
    defaultValue: 'efectivo',  // El valor por defecto es 'efectivo'
    allowNull: true,  // Permite que no se proporcione un método de pago
  }
}, {
  sequelize,
  tableName: 'pagos',
  timestamps: false,  // Si necesitas la auditoría de creación/actualización, cambia a 'timestamps: true'
});

export default Pago;

// Relaciones
Pago.belongsTo(Alquiler, { foreignKey: 'alquiler_id' });  // Relación con el modelo Alquiler

// Relación inversa (si necesitas consultar los pagos de un alquiler)
Alquiler.hasMany(Pago, { foreignKey: 'alquiler_id' });
