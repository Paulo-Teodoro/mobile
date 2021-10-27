const mongoose = require('mongoose');

const ProtocoloSchema = new mongoose.Schema({
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    protocolo : String,
    criado_em : Number,
    atualizado_em : Number
});

module.exports = mongoose.model('Protocolo', ProtocoloSchema);