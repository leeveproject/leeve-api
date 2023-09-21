import { DataTypes } from "sequelize";
import { sequelize } from "../../database/db.js";

export const Clients = sequelize.define('Clients', {
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

console.log(Clients === sequelize.models.Clients);