
const sequelize = require('./config/database');

/**
 * Script para sincronizar o banco de dados
 * Sincroniza todos os modelos definidos com o banco de dados configurado.
 */
(async () => {
  try {
    console.log('Iniciando a sincronização com o banco de dados...');
    await sequelize.sync({ force: false }); // Altere para 'true' para recriar as tabelas (apaga os dados existentes)
    console.log('Banco de dados sincronizado com sucesso.');
  } catch (error) {
    console.error('Erro ao sincronizar o banco de dados:', error);
  } finally {
    await sequelize.close(); // Fecha a conexão com o banco
    console.log('Conexão com o banco de dados encerrada.');
  }
})();
