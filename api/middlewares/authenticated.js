'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');

var secret = 'clave_secreta_mapas';

exports.ensureAuth = function(req, res, next){
    if (!req.headers.authorization) {
        return res.status(403).send({message: 'La petición no contiene la cabecera de autenticación'})
    } else {
        var token = req.headers.authorization.replace(/['"]+/g, '');

        try {
            var payload = jwt.decode(token, secret);
            if (payload.exp <= moment().unix()) {
                return res.status(401).send({message: 'El Token ha expirado'});    
            }
        } catch (ex) {
            console.log(ex);
            return res.status(401).send({message: 'Token no válido'});
        }

        req.user = payload;

        next();
    }
}