
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

/**
 * Modelo de Serviço
 * Representa a tabela 'Servico' no banco de dados.
 */
const Servico = sequelize.define('Servico', {
  id: {
    type: DataTypes.UUID, // Identificador único universal
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING, // Nome do serviço
    allowNull: false,
    validate: {
      notEmpty: { msg: 'O nome do serviço não pode estar vazio.' },
    },
  },
  descricao: {
    type: DataTypes.TEXT, // Descrição do serviço
    allowNull: true,
  },
  preco: {
    type: DataTypes.DECIMAL(10, 2), // Preço do serviço
    allowNull: false,
    validate: {
      isDecimal: { msg: 'O preço deve ser um valor decimal válido.' },
    },
  },
}, {
  timestamps: true, // Adiciona campos createdAt e updatedAt
});

module.exports = Servico;
