const express = require('express');

const route = express.Router();

const loteController = require('../controllers/lote.controller');
const md_auth = require('../middlewares/authenticated');

route.get('/lote/:id', md_auth.ensureAuth, loteController.getLote);
route.get('/lotes/:id?', md_auth.ensureAuth, loteController.getLotes);
route.post('/lote', md_auth.ensureAuth, loteController.createLote);
route.post('/edit-lote/:id', md_auth.ensureAuth, loteController.updateLote);
route.get('/delete-lote/:id', md_auth.ensureAuth, loteController.deleteLote);

module.exports = route;