
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

/**
 * Modelo de Usuário
 * Representa a tabela 'Usuario' no banco de dados.
 */
const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.UUID, // Identificador único universal
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING, // Nome do usuário
    allowNull: false,
    validate: {
      notEmpty: { msg: 'O nome não pode estar vazio.' },
    },
  },
  email: {
    type: DataTypes.STRING, // E-mail do usuário
    allowNull: false,
    unique: true,
    validate: {
      isEmail: { msg: 'Formato de e-mail inválido.' },
    },
  },
  senha: {
    type: DataTypes.STRING, // Senha do usuário (deve ser hash)
    allowNull: false,
    validate: {
      len: {
        args: [8, 100], // Requer entre 8 e 100 caracteres
        msg: 'A senha deve ter entre 8 e 100 caracteres.',
      },
    },
  },
  tipo: {
    type: DataTypes.STRING, // Tipo de usuário (exemplo: 'admin', 'cliente')
    allowNull: true,
  },
}, {
  hooks: {
    // Antes de salvar, hashear a senha
    beforeSave: async (usuario) => {
      if (usuario.senha) {
        const bcrypt = require('bcrypt');
        const saltRounds = 10;
        usuario.senha = await bcrypt.hash(usuario.senha, saltRounds);
      }
    },
  },
});

module.exports = Usuario;
