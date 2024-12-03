
const Agendamento = require('../models/Agendamento');

/**
 * Controlador de Agendamentos
 * Lida com as operações CRUD para o modelo de Agendamento.
 */

// Lista todos os agendamentos
exports.listarAgendamentos = async (req, res) => {
  try {
    const agendamentos = await Agendamento.findAll();
    res.json(agendamentos);
  } catch (error) {
    console.error('Erro ao listar agendamentos:', error);
    res.status(500).json({ erro: 'Erro ao listar agendamentos.' });
  }
};

// Cria um novo agendamento
exports.criarAgendamento = async (req, res) => {
  try {
    const { clienteId, servicoId, dataHora } = req.body;
    const novoAgendamento = await Agendamento.create({ clienteId, servicoId, dataHora });
    res.status(201).json(novoAgendamento);
  } catch (error) {
    console.error('Erro ao criar agendamento:', error);
    res.status(400).json({ erro: 'Erro ao criar agendamento. Verifique os dados enviados.' });
  }
};

// Atualiza um agendamento existente
exports.atualizarAgendamento = async (req, res) => {
  try {
    const { id } = req.params;
    const { clienteId, servicoId, dataHora } = req.body;
    const agendamento = await Agendamento.findByPk(id);
    if (!agendamento) {
      return res.status(404).json({ erro: 'Agendamento não encontrado.' });
    }
    await agendamento.update({ clienteId, servicoId, dataHora });
    res.json(agendamento);
  } catch (error) {
    console.error('Erro ao atualizar agendamento:', error);
    res.status(400).json({ erro: 'Erro ao atualizar agendamento.' });
  }
};

// Remove um agendamento
exports.removerAgendamento = async (req, res) => {
  try {
    const { id } = req.params;
    const agendamento = await Agendamento.findByPk(id);
    if (!agendamento) {
      return res.status(404).json({ erro: 'Agendamento não encontrado.' });
    }
    await agendamento.destroy();
    res.status(204).send();
  } catch (error) {
    console.error('Erro ao remover agendamento:', error);
    res.status(400).json({ erro: 'Erro ao remover agendamento.' });
  }
};
