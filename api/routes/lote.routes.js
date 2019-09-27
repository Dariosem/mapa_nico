const express = require('express');

const route = express.Router();

const loteController = require('../controllers/lote.controller');

route.get('/lote/:id', loteController.getLote);
route.get('/lotes', loteController.getLotes);
route.post('/lote', loteController.createLote);
route.put('/lote/:id', loteController.updateLote);
route.delete('/lote/:id', loteController.deleteLote);

module.exports = route;