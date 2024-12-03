
const Usuario = require('../models/Usuario');

/**
 * Repositório de Usuários
 * Responsável por interagir com o banco de dados para operações de Usuários.
 */

// Busca todos os usuários
exports.findAll = async () => {
  return await Usuario.findAll();
};

// Busca um usuário por ID
exports.findById = async (id) => {
  return await Usuario.findByPk(id);
};

// Cria um novo usuário
exports.create = async (data) => {
  return await Usuario.create(data);
};

// Atualiza um usuário
exports.update = async (id, data) => {
  const usuario = await Usuario.findByPk(id);
  if (!usuario) return null;
  return await usuario.update(data);
};

// Remove um usuário
exports.remove = async (id) => {
  const usuario = await Usuario.findByPk(id);
  if (!usuario) return null;
  return await usuario.destroy();
};
