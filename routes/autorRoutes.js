const express = require('express');

const route = express.Router();
const autorController =
  require('../controllers/autorController');

route.get('/', autorController.listar);
route.get('/:id/editar', autorController.editar);
route.get('/criar', autorController.criar);
route.post('/', autorController.inserir);
route.post('/:id', autorController.atualizar);

module.exports = route;