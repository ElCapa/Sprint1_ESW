// configuracaoRoutes.js
const express = require('express');
const router = express.Router();
const configuracaoController = require('../controllers/configuracaoController');


router.post('/configuracoes', configuracaoController.criarConfiguracao);
router.get('/configuracoes', configuracaoController.obterConfiguracoes);
router.get('/configuracoes/:id', configuracaoController.obterConfiguracaoPorId);
router.put('/configuracoes/:id', configuracaoController.atualizarConfiguracao);
router.delete('/configuracoes/:id', configuracaoController.deletarConfiguracao);

module.exports = router;
