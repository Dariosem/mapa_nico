'use strict'
const mongoose = require('mongoose');
const Lote = require('../models/lote');

//Cargar un lote nuevo
function createLote(req, res, next){
    // console.log(req.body.geometry);

    Lote.create(req.body).then((lote)=>{
        
        res.send({Lote: lote});        
    }).catch(next);

}

function getLote(req, res, next){
    let id = req.params.id;
    Lote.findById(id).then((lote)=>{
        res.send({lote: lote});
    }).catch(next);
}

function getLotes(req, res, next){
    Lote.find().then((lotes)=>{
        res.send({lotes: lotes});
    }).catch(next);
}

function updateLote(req, res, next){
    let id = req.params.id;
    // res.send({id_del_lote: id, datos: req.body})
    Lote.findByIdAndUpdate(id, req.body).then((lote)=>{
         res.send({lote: lote});
    }).catch(next);
   
}

function deleteLote(req, res, next){
    let id = req.params.id;
    Lote.findByIdAndRemove(id).then((lote)=>{
        res.send({lote});
    }).catch(next);
    
}

module.exports = {
    createLote,
    getLote,
    getLotes,
    updateLote,
    deleteLote
}