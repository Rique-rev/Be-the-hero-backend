const connection = require('../database/connection')

module.exports = {
    async create(request, response){
        const { id } = request.body
        
        let ong = await connection('ongs').where('id', id).select('name').first()
        
        if (!ong) {
            return response.status(404).json({
                error: true,
                message: 'nenhuma ong encontrada com esse id'
            })
        }

        return response.json({
            error: false,
            message: ong
        })
    }
}