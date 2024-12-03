
const express = require('express');
const router = express.Router();
const { atualizarUsuario, excluirUsuario } = require('../controllers/usersController');
const authenticate = require('../middlewares/authenticate');

// Atualizar um usuário (Cliente ou Barbeiro)
router.put('/:id', authenticate, atualizarUsuario);

// Excluir um usuário (Cliente ou Barbeiro)
router.delete('/:id', authenticate, excluirUsuario);

module.exports = router;
