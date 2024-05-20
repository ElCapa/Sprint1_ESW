const Configuracao = require('../models/Configuracao');
const Sensor = require('../models/Sensor');

exports.criarConfiguracao = async (req, res) => {
  try {
    const { parametro, valor, sensorId } = req.body;
    
    const sensor = await Sensor.findByPk(sensorId);
    if (!sensor) {
      return res.status(404).json({ message: 'Sensor não encontrado' });
    }

    if (parametro === 'intervalo_irrigacao' && valor <= 0) {
      return res.status(400).json({ message: 'Intervalo de irrigação deve ser positivo' });
    }

    const novaConfiguracao = await Configuracao.create({ parametro, valor, sensorId });
    res.status(201).json(novaConfiguracao);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.obterConfiguracoes = async (req, res) => {
  try {
    const configuracoes = await Configuracao.findAll();
    res.status(200).json(configuracoes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.obterConfiguracaoPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const configuracao = await Configuracao.findByPk(id);
    if (configuracao) {
      res.status(200).json(configuracao);
    } else {
      res.status(404).json({ message: 'Configuração não encontrada' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.atualizarConfiguracao = async (req, res) => {
  try {
    const { id } = req.params;
    const { parametro, valor, sensorId } = req.body;

    const configuracao = await Configuracao.findByPk(id);
    if (configuracao) {
      const sensor = await Sensor.findByPk(sensorId);
      if (!sensor) {
        return res.status(404).json({ message: 'Sensor não encontrado' });
      }

      if (parametro === 'intervalo_irrigacao' && valor <= 0) {
        return res.status(400).json({ message: 'Intervalo de irrigação deve ser positivo' });
      }

      configuracao.parametro = parametro;
      configuracao.valor = valor;
      configuracao.sensorId = sensorId;
      await configuracao.save();
      res.status(200).json(configuracao);
    } else {
      res.status(404).json({ message: 'Configuração não encontrada' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deletarConfiguracao = async (req, res) => {
  try {
    const { id } = req.params;
    const configuracao = await Configuracao.findByPk(id);
    if (configuracao) {
      await configuracao.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Configuração não encontrada' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
