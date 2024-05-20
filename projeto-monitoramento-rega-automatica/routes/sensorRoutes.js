// sensorRoutes.js
const express = require('express');
const router = express.Router();
const { 
    criarSensor, 
    obterTodosSensores, 
    obterSensorPorId, 
    atualizarSensor, 
    excluirSensor } = require('../controllers/sensorController');

router.post('/sensores', criarSensor);

router.get('/sensores', obterTodosSensores);

router.get('/sensores/:id', obterSensorPorId);

router.put('/sensores/:id', atualizarSensor);

router.delete('/sensores/:id', excluirSensor);

module.exports = router;
