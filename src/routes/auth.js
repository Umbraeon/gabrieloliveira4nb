const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');

const router = express.Router();

// Rota de login
router.post('/login', async (req, res) => {
  try {
    const { email, senha } = req.body;

    // Verifica se o usuário existe
    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario) {
      return res.status(401).json({ erro: 'E-mail ou senha inválidos' });
    }

    // Verifica a senha
    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) {
      return res.status(401).json({ erro: 'E-mail ou senha inválidos' });
    }

    // Gera o token JWT
    const token = jwt.sign({ id: usuario.id, tipo: usuario.tipo }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).json({ erro: 'Erro ao fazer login' });
  }
});

module.exports = router;
