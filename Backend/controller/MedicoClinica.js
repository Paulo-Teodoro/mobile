const MedicoClinica = require('../model/MedicoClinica');

module.exports = {
    async index(req, res){ // busca todos os registros
        let medicoClinicas = await MedicoClinica.find();
        return res.json(medicoClinicas);
    },

    async store(req, res){ //grava a clinica no banco
        const {Medico, Clinica, Especialidade, criado_em, atualizado_em, status} = req.body;
        const medicoClinicas = await MedicoClinica.create({Medico, Clinica, Especialidade, criado_em, atualizado_em, status});
        return res.json(medicoClinicas);
    },

    async update(req,res){ //edita
        var id = req.query.id; //pega o id na url
        let medicoClinica = await MedicoClinica.findById(id); //busca a clinica pelo id
        medicoClinica.Medico = req.body.Medico;
        medicoClinica.Clinica = req.body.Clinica;
        medicoClinica.Especialidade = req.body.Especialidade;
        medicoClinica.criado_em = req.body.criado_em;
        medicoClinica.atualizado_em = req.body.atualizado_em;
        medicoClinica.status = req.body.status;
        medicoClinica = await MedicoClinica.update(medicoClinica); //faz o update
        return res.json({mensagem : 'Atualizar o MedicoClinica ' + id + ' com os dados do post ' + medicoClinica.Medico});
    },

    async delete(req, res){
        var id = req.query.id;
        let medicoClinica = await MedicoClinica.findById(id);
        await MedicoClinica.deleteOne(medicoClinica);
        return res.json({mensagem : 'Deleta o medico clinica ' + id});
    }
}