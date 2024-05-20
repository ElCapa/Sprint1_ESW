const Sequelize = require('sequelize');
const conexaoDB = require('../util/database');

const Configuracao = conexaoDB.define('configuracao', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  parametro: {
    type: Sequelize.STRING,
    allowNull: false
  },
  valor: {
    type: Sequelize.STRING,
    allowNull: false
  },
  sensorId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = Configuracao;
