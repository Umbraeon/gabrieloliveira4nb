
const userRepository = require('../repositories/userRepository');

/**
 * Serviço de Usuários
 * Lida com a lógica de negócio de Usuários.
 */

// Busca todos os usuários
exports.listarUsuarios = async () => {
  return await userRepository.findAll();
};

// Busca um usuário por ID
exports.buscarUsuarioPorId = async (id) => {
  return await userRepository.findById(id);
};

// Cria um novo usuário
exports.criarUsuario = async (dados) => {
  return await userRepository.create(dados);
};

// Atualiza um usuário
exports.atualizarUsuario = async (id, dados) => {
  return await userRepository.update(id, dados);
};

// Remove um usuário
exports.removerUsuario = async (id) => {
  return await userRepository.remove(id);
};
