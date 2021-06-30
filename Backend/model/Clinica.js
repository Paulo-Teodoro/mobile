const mongoose = require('mongoose');

const ClinicaSchema = new mongoose.Schema({
    nome : String,
    endereco : String,
    bairro : String,
    ibge : String,
    criado_em : Number,
    atualizado_em : Number,
    status : Boolean
});

module.exports = mongoose.model('Clinica', ClinicaSchema);

