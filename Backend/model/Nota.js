const mongoose = require('mongoose');

const NotaSchema = new mongoose.Schema({
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    Materia : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Materia'
    },
    pontuacao : Number,
    bimestre : Number,
    criado_em : Number,
    atualizado_em : Number
});

module.exports = mongoose.model('Nota', NotaSchema);