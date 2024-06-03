const Sequelize = require('sequelize');
const express = require('express');
const app = express();
const sensorRoutes = require('./routes/sensorRoutes');
const conexaoDBConfig = require("./config/config.json").development; 
const notificacaoRoutes = require('./routes/notificacaoRoutes');
const configuracaoRoutes = require('./routes/configuracaoRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');

const sequelize = new Sequelize(conexaoDBConfig);
app.use(express.json());

app.use(sensorRoutes);
app.use(notificacaoRoutes);
app.use(configuracaoRoutes);
app.use(usuarioRoutes);

if (require.main === module) {
  sequelize.authenticate()
    .then(() => {
      console.log('Conexão com o banco de dados estabelecida com sucesso.');
      app.listen(8000, () => {
        console.log('Servidor está ouvindo na porta 8000.');
      });
    })
    .catch(err => {
      console.error('Erro ao conectar-se ao banco de dados:', err);
    });
}

module.exports = app; 