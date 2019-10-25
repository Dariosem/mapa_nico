const express = require('express');

const route = express.Router();

const loteoController = require('../controllers/loteo.controller');
const md_auth = require('../middlewares/authenticated');

route.get('/loteo/:id', md_auth.ensureAuth, loteoController.getLoteo);
route.get('/loteos', md_auth.ensureAuth, loteoController.getLoteos);
route.post('/loteo', md_auth.ensureAuth, loteoController.createLoteo);
route.put('/loteo/:id', md_auth.ensureAuth, loteoController.updateLoteo);
route.delete('/loteo/:id', md_auth.ensureAuth, loteoController.deleteLoteo);

module.exports = route;