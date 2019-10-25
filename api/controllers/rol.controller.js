'use strict'

const Rol = require('../models/rol');

//Cargar un lote nuevo
function createRol(req, res, next){
    
    Rol.create(req.body).then((rol)=>{
        res.send({rol: rol});        
    }).catch(next);

}

function getRol(req, res, next){
    let id = req.params.id;
    Rol.findById(id).then((rol)=>{
        res.send({rol: rol});
    }).catch(next);
}

function getRoles(req, res, next){
    if (req.params.id) {
        let id = req.params.id;
        Rol.find({_id:id}).then((roles)=>{
            res.send({roles: roles});
        }).catch(next);
    } else {
        Rol.find().then((roles)=>{
            res.send({roles: roles});
        }).catch(next);
    }
    
}

function updateRol(req, res, next){
    let id = req.params.id;
    // res.send({id_del_lote: id, datos: req.body})
    Rol.findByIdAndUpdate(id, req.body).then((rol)=>{
         res.send({rol: rol});
    }).catch(next);
   
}

function deleteRol(req, res, next){
    let id = req.params.id;
    Lote.findByIdAndRemove(id).then((rol)=>{
        res.send({rol});
    }).catch(next);
    
}

module.exports = {
    createRol,
    getRol,
    getRoles,
    updateRol,
    deleteRol
}