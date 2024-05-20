const express = require('express');
const router = express.Router();
const {
  criarNotificacao,
  obterNotificacoes,
  obterNotificacaoPorId,
  atualizarNotificacao,
  deletarNotificacao
} = require('../controllers/notificacaoController');

router.post('/notificacoes', criarNotificacao);

router.get('/notificacoes', obterNotificacoes);

router.get('/notificacoes/:id', obterNotificacaoPorId);

router.put('/notificacoes/:id', atualizarNotificacao);

router.delete('/notificacoes/:id', deletarNotificacao);

module.exports = router;
