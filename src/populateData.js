
const Usuario = require('./models/Usuario');
const Servico = require('./models/Servico');
const Agendamento = require('./models/Agendamento');
const sequelize = require('./config/database');

/**
 * Script para popular o banco de dados com dados de teste.
 */

(async () => {
  try {
    console.log('Conectando ao banco de dados...');
    await sequelize.authenticate();

    console.log('Populando usuários...');
    const usuarios = await Usuario.bulkCreate([
      { nome: 'Cliente 1', email: 'cliente1@email.com', senha: 'senha123', tipo: 'cliente' },
      { nome: 'Cliente 2', email: 'cliente2@email.com', senha: 'senha123', tipo: 'cliente' },
      { nome: 'Barbeiro 1', email: 'barbeiro1@email.com', senha: 'senha123', tipo: 'barbeiro' },
    ]);

    console.log('Populando serviços...');
    const servicos = await Servico.bulkCreate([
      { nome: 'Corte Masculino', descricao: 'Corte moderno e clássico', preco: 50.00 },
      { nome: 'Barba Completa', descricao: 'Design e hidratação', preco: 30.00 },
    ]);

    console.log('Populando agendamentos...');
    await Agendamento.bulkCreate([
      { clienteId: usuarios[0].id, servicoId: servicos[0].id, dataHora: new Date() },
      { clienteId: usuarios[1].id, servicoId: servicos[1].id, dataHora: new Date(new Date().setDate(new Date().getDate() + 1)) },
    ]);

    console.log('Dados de teste inseridos com sucesso!');
  } catch (error) {
    console.error('Erro ao popular o banco de dados:', error);
  } finally {
    await sequelize.close();
    console.log('Conexão com o banco de dados encerrada.');
  }
})();
