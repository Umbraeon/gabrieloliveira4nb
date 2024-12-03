const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

// Configuração do Sequelize para conexão com o PostgreSQL
const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING, {
  dialect: 'postgres', // Define o dialect como PostgreSQL
  logging: false, // Evita logs de SQL para deixar o console mais limpo
});

// Testando a conexão com o banco
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados PostgreSQL estabelecida com sucesso.');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
})();

module.exports = sequelize;