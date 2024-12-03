
const Usuario = require('../models/Usuario');

/**
 * Controlador de Usuários
 * Lida com as operações CRUD para o modelo de Usuário.
 */

// Lista todos os usuários
exports.listarUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    console.error('Erro ao listar usuários:', error);
    res.status(500).json({ erro: 'Erro ao listar usuários.' });
  }
};

// Cria um novo usuário
exports.criarUsuario = async (req, res) => {
  try {
    const { nome, email, senha, tipo } = req.body;
    const novoUsuario = await Usuario.create({ nome, email, senha, tipo });
    res.status(201).json(novoUsuario);
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    res.status(400).json({ erro: 'Erro ao criar usuário. Verifique os dados enviados.' });
  }
};

// Atualiza um usuário existente
exports.atualizarUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, email, tipo } = req.body;
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ erro: 'Usuário não encontrado.' });
    }
    await usuario.update({ nome, email, tipo });
    res.json(usuario);
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    res.status(400).json({ erro: 'Erro ao atualizar usuário.' });
  }
};

// Remove um usuário
exports.removerUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ erro: 'Usuário não encontrado.' });
    }
    await usuario.destroy();
    res.status(204).send();
  } catch (error) {
    console.error('Erro ao remover usuário:', error);
    res.status(400).json({ erro: 'Erro ao remover usuário.' });
  }
};
