
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

/**
 * Modelo de Agendamento
 * Representa a tabela 'Agendamento' no banco de dados.
 */
const Agendamento = sequelize.define('Agendamento', {
  id: {
    type: DataTypes.UUID, // Identificador único universal
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  clienteId: {
    type: DataTypes.UUID, // Identificador do cliente
    allowNull: false,
    validate: {
      notEmpty: { msg: 'O ID do cliente não pode estar vazio.' },
    },
  },
  servicoId: {
    type: DataTypes.UUID, // Identificador do serviço
    allowNull: false,
    validate: {
      notEmpty: { msg: 'O ID do serviço não pode estar vazio.' },
    },
  },
  dataHora: {
    type: DataTypes.DATE, // Data e hora do agendamento
    allowNull: false,
    validate: {
      isDate: { msg: 'Formato de data inválido.' },
    },
  },
}, {
  timestamps: true, // Adiciona campos createdAt e updatedAt
});

module.exports = Agendamento;
