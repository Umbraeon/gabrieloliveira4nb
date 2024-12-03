
const Servico = require('../models/Servico');

/**
 * Controlador de Serviços
 * Lida com as operações CRUD para o modelo de Serviço.
 */

// Lista todos os serviços
exports.listarServicos = async (req, res) => {
  try {
    const servicos = await Servico.findAll();
    res.json(servicos);
  } catch (error) {
    console.error('Erro ao listar serviços:', error);
    res.status(500).json({ erro: 'Erro ao listar serviços.' });
  }
};

// Cria um novo serviço
exports.criarServico = async (req, res) => {
  try {
    const { nome, descricao, preco } = req.body;
    const novoServico = await Servico.create({ nome, descricao, preco });
    res.status(201).json(novoServico);
  } catch (error) {
    console.error('Erro ao criar serviço:', error);
    res.status(400).json({ erro: 'Erro ao criar serviço. Verifique os dados enviados.' });
  }
};

// Atualiza um serviço existente
exports.atualizarServico = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, descricao, preco } = req.body;
    const servico = await Servico.findByPk(id);
    if (!servico) {
      return res.status(404).json({ erro: 'Serviço não encontrado.' });
    }
    await servico.update({ nome, descricao, preco });
    res.json(servico);
  } catch (error) {
    console.error('Erro ao atualizar serviço:', error);
    res.status(400).json({ erro: 'Erro ao atualizar serviço.' });
  }
};

// Remove um serviço
exports.removerServico = async (req, res) => {
  try {
    const { id } = req.params;
    const servico = await Servico.findByPk(id);
    if (!servico) {
      return res.status(404).json({ erro: 'Serviço não encontrado.' });
    }
    await servico.destroy();
    res.status(204).send();
  } catch (error) {
    console.error('Erro ao remover serviço:', error);
    res.status(400).json({ erro: 'Erro ao remover serviço.' });
  }
};
