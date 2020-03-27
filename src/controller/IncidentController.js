const connection = require('../database/connection')

module.exports = {
    async create(request, response) {
        let { title, description, value } = request.body
        let ong_id = request.headers.authorization

        let result = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        })

        return response.json({
            error: false,
            message: 'Incident cadastrado',
            id: result[0]
        })

    },

    async index(request, response) {
        let incidents = await connection('incidents').select('*')

        return response.json(incidents)

    },

    async delete(request, response) {
        let ong_id = request.headers.authorization
        let { id } = request.params

        incident = await connection('incidents').where('id', id).select().first()

        if (typeof incident == "undefined") {
            return response.status(404).json({
                error: true,
                message: 'esta incident não existe'
            })
        }
        else if (incident.ong_id != ong_id) {
            return response.status(401).json({
                error: true,
                message: 'esta ong não tem permissão para deletar esse incident'
            })
        }

        //Deletando o Incident com o id especificado
        await connection('incidents').where('id', id).delete()

        return response.status(204).send()
    }
}