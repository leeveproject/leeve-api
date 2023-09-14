import { DataTypes } from "sequelize";
import { sequelize } from "../../database/db.js";

export const Users = sequelize.define('Users', {
  FirstName: {
    type: DataTypes.STRING,
    allowNull: true
  },
  LastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Company: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Size: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {})

console.log(Users === sequelize.models.Users);