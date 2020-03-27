const connection = require('../database/connection')

module.exports = {
    async index(request, response){
        const ong_id = request.headers.authorization
        
        let all_incidents = await connection('incidents').where('ong_id', ong_id).select('*')
        
        if (typeof all_incidents == "undefined") {
            return response.status(404).json({
                error: true,
                message: 'nenhum incident cadastrado'
            })
        }

        return response.json(all_incidents)
    }
}