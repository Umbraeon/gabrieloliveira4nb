
const express = require('express');
const router = express.Router();
const { atualizarAgendamento, excluirAgendamento } = require('../controllers/agendamentosController');
const authenticate = require('../middlewares/authenticate');

// Atualizar um agendamento
router.put('/:id', authenticate, atualizarAgendamento);

// Excluir um agendamento
router.delete('/:id', authenticate, excluirAgendamento);

module.exports = router;
