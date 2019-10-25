'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RolSchema = Schema({
    description: {
        type: String,
        enum: ['vendedor', 'Amdin'],
        required: true
    }
});

module.exports = mongoose.model('Rol', RolSchema);