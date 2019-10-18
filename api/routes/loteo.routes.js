const express = require('express');

const route = express.Router();

const loteoController = require('../controllers/loteo.controller');

route.get('/loteo/:id', loteoController.getLoteo);
route.get('/loteos', loteoController.getLoteos);
route.post('/loteo', loteoController.createLoteo);
route.put('/loteo/:id', loteoController.updateLoteo);
route.delete('/loteo/:id', loteoController.deleteLoteo);

module.exports = route;