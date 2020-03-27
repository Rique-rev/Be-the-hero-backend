const connection = require('../database/connection')
const crypto = require('crypto')

module.exports = {
    async create(request, response) {

        //criando um id aleatorio
        const id = crypto.randomBytes(4).toString('HEX')
        //pegando as informações do body
        const { name, email, whatsapp, city, uf } = request.body

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
            error: false,
            message: 'Ong cadastrada',
            id: id
        })
    },

    async index(request, response) {
        let ongs = await connection('ongs').select('*')

        return response.json(ongs)
    }
}