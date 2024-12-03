
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares globais
app.use(cors()); // Permite requisições de origens diferentes (CORS)
app.use(express.json()); // Processa payloads JSON

// Rotas básicas
app.get('/', (req, res) => {
  res.send('O backend está rodando!');
});

// Importação de rotas
const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

const userRoutes = require('./routes/users');
app.use('/usuarios', userRoutes);

const agendamentoRoutes = require('./routes/agendamentos');
app.use('/agendamentos', agendamentoRoutes);

// Tratamento de erros genéricos
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ erro: 'Erro interno do servidor' });
});

// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;
