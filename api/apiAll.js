const express = require('express')
const API =express.Router();
const api = require('./api')
API.get('/',api.find)
API.post('/',api.post)
API.put('/:id',api.edit)
API.delete('/:id',api.delet)

module.exports =API;