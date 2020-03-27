const express = require('express')
const routes = express.Router()
const crypto = require('crypto')
const connection = require('./database/connection')
const OngController = require('./controller/OngController')
const IncidentController = require('./controller/IncidentController')
const ProfileController = require('./controller/ProfileController')

/*
    * Acessar Info Body:
        const body = request.body
    
    * Acessar Info Query Params (?):
        const query_params = request.query

    * Acessar Info Route Params (users/:id):
        const route_params = request.params

*/

routes.get('/ongs', OngController.index) //Cria uma nova ong
routes.post('/ongs', OngController.create) //Lista todas as ongs


routes.post('/incidents', IncidentController.create) //Criar um novo incident
routes.get('/incidents', IncidentController.index) //Lista todos os incidents
routes.delete('/incidents/:id', IncidentController.delete) //Deletar um incidents

routes.get('/profile', ProfileController.index) //Lista todos os incidents de uma ong especifica


module.exports = routes