
const { exec } = require('child_process');

/**
 * Script para testar a sincronização do banco de dados
 */

console.log('Testando sincronização do banco de dados...');

exec('node src/syncDatabase.js', (error, stdout, stderr) => {
  if (error) {
    console.error('Erro ao sincronizar o banco de dados:', error.message);
    return;
  }
  if (stderr) {
    console.error('Erro durante a sincronização:', stderr);
    return;
  }
  console.log('Saída do script de sincronização:', stdout);
});
