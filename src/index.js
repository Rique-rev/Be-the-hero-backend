const express = require('express')
const routes = require('./routes')
const app = express();
const cors = require('cors')

//Configurando CORS
app.use(cors()) //permitir que todos os endereços acessem a aplicação

/*
Definindo rotas especificas na configuração do CORS

    app.use(cors({
        origin: 'http://urlDoFrontend.com'
    }))
*/

//Informar para o express que os bodys virão no formato JSON
app.use(express.json())

app.use(routes)

app.listen(3333);