
const axios = require('axios');

/**
 * Script básico para testar funcionalidades CRUD e autenticação
 */

const BASE_URL = 'http://localhost:3000';

(async () => {
  try {
    console.log('Iniciando testes...');

    // 1. Testar criação de usuário
    console.log('Criando um novo usuário...');
    const novoUsuario = {
      nome: 'Teste Usuário',
      email: 'teste@usuario.com',
      senha: 'senha123',
      tipo: 'cliente',
    };
    const usuarioCriado = await axios.post(`${BASE_URL}/usuarios`, novoUsuario);
    console.log('Usuário criado:', usuarioCriado.data);

    // 2. Testar login para obter token JWT
    console.log('Realizando login...');
    const loginResponse = await axios.post(`${BASE_URL}/auth/login`, {
      email: novoUsuario.email,
      senha: novoUsuario.senha,
    });
    const token = loginResponse.data.token;
    console.log('Token obtido:', token);

    // 3. Testar listagem de usuários
    console.log('Listando usuários...');
    const usuarios = await axios.get(`${BASE_URL}/usuarios`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log('Usuários:', usuarios.data);

    // 4. Testar atualização de usuário
    console.log('Atualizando o usuário...');
    const usuarioAtualizado = await axios.put(
      `${BASE_URL}/usuarios/${usuarioCriado.data.id}`,
      { nome: 'Usuário Atualizado' },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log('Usuário atualizado:', usuarioAtualizado.data);

    // 5. Testar exclusão de usuário
    console.log('Excluindo o usuário...');
    await axios.delete(`${BASE_URL}/usuarios/${usuarioCriado.data.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log('Usuário excluído com sucesso.');

    console.log('Todos os testes foram concluídos com sucesso!');
  } catch (error) {
    console.error('Erro durante os testes:', error.response?.data || error.message);
  }
})();
