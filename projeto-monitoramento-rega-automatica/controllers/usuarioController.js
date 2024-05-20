const Usuario = require('../models/Usuario');

exports.criarUsuario = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    const novoUsuario = await Usuario.create({ nome, email, senha });
    res.status(201).json(novoUsuario); 
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

exports.obterUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

exports.obterUsuarioPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await Usuario.findByPk(id);
    if (usuario) {
      res.status(200).json(usuario);
    } else {
      res.status(404).json({ message: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

exports.atualizarUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, email, senha } = req.body;
    const usuario = await Usuario.findByPk(id);
    if (usuario) {
      usuario.nome = nome;
      usuario.email = email;
      usuario.senha = senha;
      await usuario.save();
      res.status(200).json(usuario);
    } else {
      res.status(404).json({ message: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

exports.deletarUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await Usuario.findByPk(id);
    if (usuario) {
      await usuario.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
