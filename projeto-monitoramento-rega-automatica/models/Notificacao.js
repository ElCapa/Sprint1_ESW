const Sequelize  = require('sequelize');
const conexaoDB = require('../util/database');
const Sensor = require('./Sensor');

const Notificacao = conexaoDB.define('notificacao', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    message: {
        type: Sequelize.STRING,
        allowNull: false
    },
    
    dateHora: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    }
});

Notificacao.belongsTo(Sensor); 
Sensor.hasMany(Notificacao); 

module.exports = Notificacao;
