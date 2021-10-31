const express = require('express')
const Router = express.Router();
const route = require('./route')

Router.get('/details',route.details)
Router.get('/input',route.input)
Router.get('/item_out',route.item_out)
Router.get('/',route.mainPage)
Router.get('/edite',route.edite)



module.exports =Router;