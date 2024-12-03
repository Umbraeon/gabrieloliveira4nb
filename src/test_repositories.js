
const axios = require('axios');

/**
 * Script para validar a camada de repositórios
 * Testa as operações CRUD após a refatoração.
 */

const BASE_URL = 'http://localhost:3000';

(async () => {
  try {
    console.log('Iniciando testes com repositórios...');

    // Teste de criação de usuário
    console.log('Criando um novo usuário...');
    const novoUsuario = {
      nome: 'Teste Repositório',
      email: 'repositorio@teste.com',
      senha: 'senha123',
      tipo: 'cliente',
    };
    const usuarioCriado = await axios.post(`${BASE_URL}/usuarios`, novoUsuario);
    console.log('Usuário criado:', usuarioCriado.data);

    // Teste de listagem de usuários
    console.log('Listando usuários...');
    const usuarios = await axios.get(`${BASE_URL}/usuarios`);
    console.log('Usuários:', usuarios.data);

    // Teste de atualização de usuário
    console.log('Atualizando o usuário...');
    const usuarioAtualizado = await axios.put(
      `${BASE_URL}/usuarios/${usuarioCriado.data.id}`,
      { nome: 'Repositório Atualizado' }
    );
    console.log('Usuário atualizado:', usuarioAtualizado.data);

    // Teste de exclusão de usuário
    console.log('Excluindo o usuário...');
    await axios.delete(`${BASE_URL}/usuarios/${usuarioCriado.data.id}`);
    console.log('Usuário excluído com sucesso.');

    console.log('Todos os testes com repositórios foram concluídos com sucesso!');
  } catch (error) {
    console.error('Erro durante os testes com repositórios:', error.response?.data || error.message);
  }
})();
