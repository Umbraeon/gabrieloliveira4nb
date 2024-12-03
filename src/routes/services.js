
const express = require('express');
const servicesController = require('../controllers/servicesController');

const router = express.Router();

// Rota para listar serviços
router.get('/', servicesController.listarServicos);

module.exports = router;
