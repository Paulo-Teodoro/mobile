const Medico = require('../model/Medico');

module.exports = {
    async index(req, res){ // busca todos os registros
        let medicos = await Medico.find()
        return res.json(medicos)
    },

    async store(req, res){ //grava o medico no banco
        const {crm, nome, endereco, bairro, ibge, email, tem_clinica, site, criado_em, atualizado_em, status} = req.body;
        const medico = await Medico.create({crm, nome, endereco, bairro, ibge, email, tem_clinica, site, criado_em, atualizado_em, status});
        return res.json(medico);
    },

    async update(req,res){ //edita
        var id = req.query.id; //pega o id na url
        let medico = await Medico.findById(id); //busca o medico pelo id
        medico.crm = req.body.crm;
        medico.nome = req.body.nome;
        medico.endereco = req.body.endereco;
        medico.bairro = req.body.bairro;
        medico.ibge = req.body.ibge;
        medico.email = req.body.email;
        medico.tem_clinica = req.body.tem_clinica;
        medico.site = req.body.site;
        medico.criado_em = req.body.criado_em;
        medico.atualizado_em = req.body.atualizado_em;
        medico.status = req.body.status;
        medico = await Medico.update(medico); //faz o update
        return res.json({mensagem : 'Atualizar o Medico ' + id + ' com os dados do post ' + medico.nome});
    },

    async delete(req, res){
        var id = req.query.id;
        let medico = await Medico.findById(id);
        await Medico.deleteOne(medico);
        return res.json({mensagem : 'Deleta o medico ' + id});
    }
}