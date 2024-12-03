
const agendamentoRepository = require('../repositories/agendamentoRepository');

/**
 * Serviço de Agendamentos
 * Lida com a lógica de negócio de Agendamentos.
 */

// Busca todos os agendamentos
exports.listarAgendamentos = async () => {
  return await agendamentoRepository.findAll();
};

// Busca um agendamento por ID
exports.buscarAgendamentoPorId = async (id) => {
  return await agendamentoRepository.findById(id);
};

// Cria um novo agendamento
exports.criarAgendamento = async (dados) => {
  return await agendamentoRepository.create(dados);
};

// Atualiza um agendamento
exports.atualizarAgendamento = async (id, dados) => {
  return await agendamentoRepository.update(id, dados);
};

// Remove um agendamento
exports.removerAgendamento = async (id) => {
  return await agendamentoRepository.remove(id);
};
