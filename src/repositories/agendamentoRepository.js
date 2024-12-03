
const Agendamento = require('../models/Agendamento');

/**
 * Repositório de Agendamentos
 * Responsável por interagir com o banco de dados para operações de Agendamentos.
 */

// Busca todos os agendamentos
exports.findAll = async () => {
  return await Agendamento.findAll();
};

// Busca um agendamento por ID
exports.findById = async (id) => {
  return await Agendamento.findByPk(id);
};

// Cria um novo agendamento
exports.create = async (data) => {
  return await Agendamento.create(data);
};

// Atualiza um agendamento
exports.update = async (id, data) => {
  const agendamento = await Agendamento.findByPk(id);
  if (!agendamento) return null;
  return await agendamento.update(data);
};

// Remove um agendamento
exports.remove = async (id) => {
  const agendamento = await Agendamento.findByPk(id);
  if (!agendamento) return null;
  return await agendamento.destroy();
};
