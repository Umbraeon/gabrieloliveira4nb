
const jwt = require('jsonwebtoken');

/**
 * Middleware de autenticação
 * Verifica a validade do token JWT antes de permitir acesso às rotas protegidas.
 */
module.exports = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  // Verifica se o token foi fornecido
  if (!token) {
    return res.status(401).json({ erro: 'Acesso negado. Nenhum token fornecido.' });
  }

  try {
    // Verifica e decodifica o token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = decoded; // Adiciona os dados do usuário à requisição
    next();
  } catch (error) {
    console.error('Erro de autenticação:', error);
    res.status(400).json({ erro: 'Token inválido.' });
  }
};
