
const Servico = require('../models/Servico');

/**
 * Repositório de Serviços
 * Responsável por interagir com o banco de dados para operações de Serviços.
 */

// Busca todos os serviços
exports.findAll = async () => {
  return await Servico.findAll();
};

// Busca um serviço por ID
exports.findById = async (id) => {
  return await Servico.findByPk(id);
};

// Cria um novo serviço
exports.create = async (data) => {
  return await Servico.create(data);
};

// Atualiza um serviço
exports.update = async (id, data) => {
  const servico = await Servico.findByPk(id);
  if (!servico) return null;
  return await servico.update(data);
};

// Remove um serviço
exports.remove = async (id) => {
  const servico = await Servico.findByPk(id);
  if (!servico) return null;
  return await servico.destroy();
};
