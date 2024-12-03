
const serviceRepository = require('../repositories/serviceRepository');

/**
 * Serviço de Serviços
 * Lida com a lógica de negócio de Serviços.
 */

// Busca todos os serviços
exports.listarServicos = async () => {
  return await serviceRepository.findAll();
};

// Busca um serviço por ID
exports.buscarServicoPorId = async (id) => {
  return await serviceRepository.findById(id);
};

// Cria um novo serviço
exports.criarServico = async (dados) => {
  return await serviceRepository.create(dados);
};

// Atualiza um serviço
exports.atualizarServico = async (id, dados) => {
  return await serviceRepository.update(id, dados);
};

// Remove um serviço
exports.removerServico = async (id) => {
  return await serviceRepository.remove(id);
};
