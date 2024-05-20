// Usuario.js
const Sequelize = require('sequelize');
const conexaoDB = require('../util/database');

const Usuario = conexaoDB.define('usuario', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true 
  },
  senha: {
    type: Sequelize.STRING,
    allowNull: false
  },
 
});

module.exports = Usuario;
