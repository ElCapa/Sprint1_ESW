const Sensor = require('../models/Sensor');

exports.criarSensor = async (req, res) => {
  try {
    const { nome, tipo} = req.body;
    const novoSensor = await Sensor.create({ nome, tipo});
    res.status(201).json(novoSensor); 
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

exports.obterTodosSensores = async(req, res) =>{
    try {
      const sensores = await Sensor.findAll();
      res.json(sensores); 
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

exports.obterSensorPorId = async (req, res) => {
    try {
      const { id } = req.params;
      const sensor = await Sensor.findByPk(id);
      if (!sensor) {
        return res.status(404).json({ message: 'Sensor não encontrado' });
      }
      res.json(sensor); 
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  
exports.atualizarSensor = async (req, res) =>{
    try {
      const { id } = req.params;
      const { nome, tipo} = req.body;
      
      const sensor = await Sensor.findByPk(id);
      if (!sensor) {
        return res.status(404).json({ message: 'Sensor não encontrado' });
      }

      sensor.nome = nome;
      sensor.tipo = tipo;
      
      await sensor.save(); 
      res.status(200).json(sensor);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

exports.excluirSensor = async (req, res) => {
  try {
    const { id } = req.params;
    const sensor = await Sensor.findByPk(id);
    if (sensor) {
      await sensor.destroy();
      res.status(204).json({ message: 'Sensor removido com sucesso.' });
    } else {
      res.status(404).json({ message: 'Sensor não encontrado' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
  }
  
