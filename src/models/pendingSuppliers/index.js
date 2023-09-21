import { DataTypes } from "sequelize";
import { sequelize } from "../../database/db.js";

export const Suppliers = sequelize.define('Suppliers', {
  Name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Value: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Pending: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
}, {})

console.log(Suppliers === sequelize.models.Suppliers);