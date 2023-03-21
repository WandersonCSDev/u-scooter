const Sequelize = require("sequelize");
const database = require("../db");



const dbScooter = database.define("scooter", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  model: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  year: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  motor_pow: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  batery_pow: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  batery_type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  weight: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  max_velocity: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  autonomy: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  charge_time: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})

module.exports = dbScooter;
