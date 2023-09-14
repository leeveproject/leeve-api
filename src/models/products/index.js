import { DataTypes } from "sequelize";
import { sequelize } from "../../database/db.js";

export const Products = sequelize.define('Products', {
  Name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Supplier: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Type: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Buydate: {
    type: DataTypes.DATE,
    allowNull: true
  },
  Duedate: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {})

console.log(Products === sequelize.models.Products);