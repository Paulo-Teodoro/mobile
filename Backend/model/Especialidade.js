const mongoose = require('mongoose');

const EspecialidadeSchema = new mongoose.Schema({
    titulo : String,
    subtitulo : String,
    texto : String,
    imagem : String,
    criado_em : Number,
    atualizado_em : Number,
    status : Boolean
});

module.exports = mongoose.model('Especialidade', EspecialidadeSchema);