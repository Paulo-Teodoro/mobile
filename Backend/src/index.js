const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');
const app = express(); //instanciando express (gerenciador de rotas)

mongoose.connect('mongodb+srv://teodoro:toor@app.zhmfe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
}); //conectando ao mongo DB

app.use(express.json());
app.use(routes);

app.listen(3000); //definindo a porta

console.log("Servidor rodando no end: http://localhost:3000");