const express = require('express');
const router = express.Router();
const {
  criarUsuario,
  obterUsuarios,
  obterUsuarioPorId,
  atualizarUsuario,
  deletarUsuario
} = require('../controllers/usuarioController');

router.post('/usuarios', criarUsuario);

router.get('/usuarios', obterUsuarios);

router.get('/usuarios/:id', obterUsuarioPorId);

router.put('/usuarios/:id', atualizarUsuario);

router.delete('/usuarios/:id', deletarUsuario);

module.exports = router;
