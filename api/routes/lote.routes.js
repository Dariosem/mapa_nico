const express = require('express');

const route = express.Router();

const loteController = require('../controllers/lote.controller');

route.get('/lote/:id', loteController.getLote);
route.get('/lotes/:id?', loteController.getLotes);
route.post('/lote', loteController.createLote);
route.post('/edit-lote/:id', loteController.updateLote);
route.get('/delete-lote/:id', loteController.deleteLote);

module.exports = route;