const express = require('express')
const routes = require('./routes')
const app = express();

//Informar para o express que os bodys virão no formato JSON
app.use(express.json())
app.use(routes)

app.listen(3333);