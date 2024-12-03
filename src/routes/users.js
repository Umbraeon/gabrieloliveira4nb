
const express = require('express');
const usersController = require('../controllers/usersController');

const router = express.Router();

/**
 * Rotas para operações relacionadas a usuários.
 */

// Lista todos os usuários
router.get('/', usersController.listarUsuarios);

// Cria um novo usuário
router.post('/', usersController.criarUsuario);

// Atualiza um usuário existente
router.put('/:id', usersController.atualizarUsuario);

// Remove um usuário
router.delete('/:id', usersController.removerUsuario);

module.exports = router;
