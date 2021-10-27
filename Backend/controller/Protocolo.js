const Protocolo = require('../model/Protocolo');

module.exports = {
    async index(req, res){ // busca todos os registros
        let protocolos = await Protocolo.find();
        return res.json(protocolos);
    },

    async store(req, res){ 
        const {User, protocolo, criado_em, atualizado_em} = req.body;
        
        const protocolo_store = await Protocolo.create({User, protocolo, criado_em, atualizado_em});
        return res.json(protocolo_store);
    },

    async update(req,res){ //edita
        var id = req.query.id; //pega o id na url
        let protocolo = await Protocolo.findById(id); //busca a falta pelo id
        protocolo.User = req.body.User;
        protocolo.protocolo = req.body.protocolo;
        protocolo.criado_em = req.body.criado_em;
        protocolo.atualizado_em = req.body.atualizado_em;
        protocolo = await Protocolo.updateOne(protocolo); //faz o update
        return res.json({mensagem : 'Atualizar o Protocolo ' + id + ' com os dados do post' + protocolo});
    },

    async delete(req, res){
        var id = req.query.id;
        let protocolo = await Protocolo.findById(id);
        await Protocolo.deleteOne(protocolo);
        return res.json({mensagem : 'Deleta o protocolo ' + id});
    },

    async protocoloAluno(req, res){
        var user = req.query.User;
        let protocolo = await Protocolo.find({ User: {$eq: user}});
        return res.json(protocolo);
    }
}