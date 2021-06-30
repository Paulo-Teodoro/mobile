const Clinica = require('../model/Clinica');

module.exports = {
    async index(req, res){ // busca todos os registros
        let clinicas = await Clinica.find()
        return res.json(clinicas)
    },

    async store(req, res){ //grava a clinica no banco
        const {nome, endereco, bairro, ibge, criado_em, atualizado_em, status} = req.body;
        const clinica = await Clinica.create({nome, endereco, bairro, ibge, criado_em, atualizado_em, status});
        return res.json(clinica);
    },



    
    async update(req,res){ //edita
        var id = req.query.id; //pega o id na url
        let clinica = await Clinica.findById(id); //busca a clinica pelo id
        clinica.nome = req.body.nome;
        clinica.endereco = req.body.endereco;
        clinica.bairro = req.body.bairro;
        clinica.ibge = req.body.ibge;
        clinica.criado_em = req.body.criado_em;
        clinica.atualizado_em = req.body.atualizado_em;
        clinica.status = req.body.status;
        clinica = await Clinica.update(clinica); //faz o update
        return res.json({mensagem : 'Atualizar o clinica ' + id + ' com os dados do post ' + clinica.nome});
    },

    async delete(req, res){
        var id = req.query.id;
        let clinica = await Clinica.findById(id);
        await Clinica.deleteOne(clinica);
        return res.json({mensagem : 'Deleta a clinica ' + id});
    }
};