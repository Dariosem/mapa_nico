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
    },
    loteo_id: { type: Schema.ObjectId, ref: 'Loteo'}
});

const LoteSchema = new Schema({
    type: String,
    geometry: {
        type: PolygonSchema
    },
    properties: Object
    
});

module.exports = mongoose.model('Lote', LoteSchema);