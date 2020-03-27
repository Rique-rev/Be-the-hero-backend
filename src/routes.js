const express = require('express')
const routes = express.Router()
const crypto = require('crypto')
const connection = require('./database/connection')
/*
    * Acessar Info Body:
        const body = request.body
    
    * Acessar Info Query Params (?):
        const query_params = request.query

    * Acessar Info Route Params (users/:id):
        const route_params = request.params

*/

routes.get('/ongs', async(request, response) => {
    let ongs = await connection('ongs').select('*')
    
    return response.json(ongs)
})

routes.post('/ongs', async (request, response) => {
    //criando um id aleatorio
    const id = crypto.randomBytes(4).toString('HEX')
    //pegando as informações do body
    const {name, email, whatsapp, city, uf} = request.body

    //se conectando com o banco de dados e inserindo dados
    await connection('ongs').insert({
       id,
       name,
       email,
       whatsapp,
       city,
       uf,
    })
    return response.json({
        error:false,
        message: 'Ong cadastrada',
        id: id
    })
})


module.exports = routes