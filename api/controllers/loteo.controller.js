'use strict'

const Loteo = require('../models/loteo');


//Cargar un lote nuevo
function createLoteo(req, res, next){
    // console.log(req.body.geometry);

    Loteo.create(req.body).then((loteo)=>{
        
        res.send({Loteo: loteo});        
    }).catch(next);

}

function getLoteo(req, res, next){
    let id = req.params.id;
    Loteo.findById(id).then((loteo)=>{
        res.send({loteo: loteo});
    }).catch(next);
}

function getLoteos(req, res, next){
    Loteo.find().then((loteos)=>{
        res.send({loteos: loteos});
    }).catch(next);
}

function updateLoteo(req, res, next){
    let id = req.params.id;
    // res.send({id_del_loteo: id, datos: req.body})
    Loteo.findByIdAndUpdate(id, req.body).then((loteo)=>{
         res.send({loteo: loteo});
    }).catch(next);
   
}

function deleteLoteo(req, res, next){
    let id = req.params.id;
    Loteo.findByIdAndRemove(id).then((loteo)=>{
        res.send({loteo});
    }).catch(next);
    
}

module.exports = {
    createLoteo,
    getLoteo,
    getLoteos,
    updateLoteo,
    deleteLoteo
}