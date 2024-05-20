// Sensor.js
const Sequelize = require('sequelize');
const conexaoDB = require('../util/database');

const Sensor = conexaoDB.define('sensor', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  tipo: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Sensor;
