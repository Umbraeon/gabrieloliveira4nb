
const express = require('express');
const bcrypt = require('bcrypt');
const Usuario = require('../models/Usuario');
const { body, validationResult } = require('express-validator');

const router = express.Router();

// Helper function for validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Rota para cadastrar um novo usuário (cliente ou barbeiro)
router.post(
  '/cadastrar',
  [
    body('nome').notEmpty().withMessage('Nome é obrigatório'),
    body('email').isEmail().withMessage('E-mail inválido'),
    body('senha')
      .isLength({ min: 6 })
      .withMessage('A senha deve ter pelo menos 6 caracteres'),
    body('tipo')
      .isIn(['cliente', 'barbeiro'])
      .withMessage('Tipo deve ser "cliente" ou "barbeiro"'),
  ],
  handleValidationErrors,
  async (req, res) => {
    try {
      const { nome, email, senha, tipo } = req.body;

      // Verificar se o e-mail já está em uso
      const existente = await Usuario.findOne({ where: { email } });
      if (existente) {
        return res.status(400).json({ error: 'E-mail já cadastrado' });
      }

      // Hash da senha
      const senhaHashed = await bcrypt.hash(senha, 10);

      const novoUsuario = await Usuario.create({
        nome,
        email,
        senha: senhaHashed,
        tipo,
      });

      res.status(201).json(novoUsuario);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao cadastrar usuário' });
    }
  }
);

// Rota para listar todos os usuários (opcionalmente filtrar por tipo)
router.get('/', async (req, res) => {
  try {
    const { tipo } = req.query;
    const condicao = tipo ? { where: { tipo } } : {};

    const usuarios = await Usuario.findAll(condicao);
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
});

module.exports = router;
