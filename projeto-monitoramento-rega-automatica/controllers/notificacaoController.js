const Notificacao = require('../models/Notificacao');


exports.criarNotificacao = async (req, res) => {
  try {
    const { type, message, dataHora, sensorId } = req.body;
    const novaNotificacao = await Notificacao.create({ type, message, dataHora, sensorId });
    res.status(201).json(novaNotificacao); 
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}


exports.obterNotificacoes = async (req, res) => {
  try {
    const notificacoes = await Notificacao.findAll();
    res.status(200).json(notificacoes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

exports.obterNotificacaoPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const notificacao = await Notificacao.findByPk(id);
    if (notificacao) {
      res.status(200).json(notificacao);
    } else {
      res.status(404).json({ message: 'Notificação não encontrada' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

exports.atualizarNotificacao = async (req, res) => {
  try {
    const { id } = req.params;
    const { type, message, dateHora, sensorId } = req.body;
    console.log(`Atualizando notificação ${id} com dados:`, req.body);
    const notificacao = await Notificacao.findByPk(id);
    if (notificacao) {
      notificacao.type = type;
      notificacao.message = message;
      notificacao.dateHora = dateHora;
      notificacao.sensorId = sensorId;
      await notificacao.save();
      res.status(200).json(notificacao);
    } else {
      res.status(404).json({ message: 'Notificação não encontrada' });
    }
  } catch (error) {
    console.error('Erro ao atualizar notificação:', error);
    res.status(400).json({ message: error.message });
  }
};



exports.deletarNotificacao = async (req, res) => {
  try {
    const { id } = req.params;
    const notificacao = await Notificacao.findByPk(id);
    if (notificacao) {
      await notificacao.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Notificação não encontrada' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
