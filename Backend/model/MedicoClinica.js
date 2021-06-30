const mongoose = require('mongoose');

const MedicoClinicaSchema = new mongoose.Schema({
    Medico : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Medico'
    },
    Clinica : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Clinica'
    },
    Especialidade : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Especialidade'
    },
    criado_em : Number,
    atualizado_em : Number,
    status : Boolean
});

module.exports = mongoose.model('MedicoClinica', MedicoClinicaSchema);