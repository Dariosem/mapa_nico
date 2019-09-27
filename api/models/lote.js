'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//create geolocation schema

const PolygonSchema = new Schema({
    type: {
        type: String,
        enum: ['Polygon'],
        required: true
    },
    coordinates:{
        type: [[[Number]]],
        required: true
    }
});


const LoteSchema = new Schema({
    name: String,
    color: {
        type: String,
        default: 'green'
    },
    status: {
        type: String,
        enum: ['Disponible', 'Reservado', 'Vendido'],
        default: 'Disponible'
    },
    geometry: {
        type: PolygonSchema,
        index: '2dsphere'
    },
    
});

module.exports = mongoose.model('lote', LoteSchema);