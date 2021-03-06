'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LoteoSchema = new Schema({
    name: {type:String, required: true},
    geometry: {
        type: {
            type: String,
            enum: ['Point'],
            default: 'Point',
            required: true
        },
        coordinates:{
            type: [Number],
            required: true
        }
    },
    properties: Object
    
});

module.exports = mongoose.model('Loteo', LoteoSchema);