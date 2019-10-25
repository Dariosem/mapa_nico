const express = require('express');

const route = express.Router();

const rolController = require('../controllers/rol.controller');

const md_auth = require('../middlewares/authenticated');

route.get('/rol/:id', md_auth.ensureAuth,rolController.getRol);
route.get('/roles/:id?',md_auth.ensureAuth, rolController.getRoles);
route.post('/rol', md_auth.ensureAuth, rolController.createRol);
route.post('/edit-rol/:id', md_auth.ensureAuth, rolController.updateRol);
route.get('/delete-rol/:id', md_auth.ensureAuth, rolController.deleteRol);

module.exports = route;