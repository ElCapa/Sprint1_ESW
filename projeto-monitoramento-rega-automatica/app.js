const express = require('express');
const app = express();
const sensorRoutes = require('./routes/sensorRoutes');
const conexaoDB = require("./util/database");
const notificacaoRoutes = require('./routes/notificacaoRoutes');
const configuracaoRoutes = require('./routes/configuracaoRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');

app.use(express.json());

app.use(sensorRoutes);
app.use(notificacaoRoutes);
app.use(configuracaoRoutes);
app.use(usuarioRoutes);

  conexaoDB.authenticate()
.then(()=> {
    console.log('conexao OK');
    conexaoDB.sync( {force: true})
    .then(() => {
        console.log('OK OK ');
        app.listen(8000);
    })
    .catch(erro => {
        console.log(erro);
    }); 
})
.catch((erro) => {
    console.log(erro.message);
    process.exit(1);
});