const mongoose = require('mongoose');

const MedicoSchema = new mongoose.Schema({
    crm : String,
    nome : String,
    endereco : String,
    bairro : String,
    ibge : Number,
    email : String,
    tem_clinica : Boolean,
    site : String,
    criado_em : Number,
    atualizado_em : Number,
    status : Boolean
});

module.exports = mongoose.model('Medico', MedicoSchema);