'use strict'
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cargar rutas
var loteRoutes = require('./routes/lote.routes');
/* var userRoutes = require('./routes/user.routes');
var artistRoutes = require('./routes/artist.routes');
var albumRoutes = require('./routes/album.routes');
var songRoutes = require('./routes/song.router'); */

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//configurar cabeceras
/* app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Method', 'GET, POST, OPTION, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTION, PUT, DELETE');

    next();
}); */

//carga de rutas base
app.use('/api', loteRoutes);
//app.use(express.static(path.join(__dirname, '../client')));
/* app.use('/api', userRoutes);
app.use('/api', artistRoutes);
app.use('/api', albumRoutes);
app.use('/api', songRoutes); */

//error handling
app.use(function(err, req, res, next){
    res.status(422).send({
        error: err.message
    });
});

module.exports = app;
