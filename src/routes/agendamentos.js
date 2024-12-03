
const express = require('express');
const agendamentosController = require('../controllers/agendamentosController');

const router = express.Router();

/**
 * Rotas para operações relacionadas a agendamentos.
 */

// Lista todos os agendamentos
router.get('/', agendamentosController.listarAgendamentos);

// Cria um novo agendamento
router.post('/', agendamentosController.criarAgendamento);

// Atualiza um agendamento existente
router.put('/:id', agendamentosController.atualizarAgendamento);

// Remove um agendamento
router.delete('/:id', agendamentosController.removerAgendamento);

module.exports = router;
