const Nota = require('../model/Nota');

module.exports = {
    async index(req, res){ // busca todos os registros
        let notas = await Nota.find();
        return res.json(notas);
    },

    async store(req, res){ //grava a clinica no banco
        const {User, Materia, pontuacao, bimestre, criado_em, atualizado_em} = req.body;
        if(req.body.pontuacao < 0 || req.body.pontuacao > 100) {
            console.log('400');
            return res.status(400).json({mensagem : "Pontuação deve ser entre 0 e 100"});
        }
        if(req.body.bimestre < 0 || req.body.bimestre > 4) {
            console.log('400');
            return res.status(400).json({mensagem : "bimestre deve ser entre 0 e 4"});
        }
        const nota = await Nota.create({User, Materia, pontuacao, bimestre, criado_em, atualizado_em});
        return res.json(nota);
    },

    async update(req,res){ //edita
        var id = req.query.id; //pega o id na url
        let nota = await Nota.findById(id); //busca a nota pelo id
        if(req.body.pontuacao < 0 || req.body.pontuacao > 100) {
            console.log('400');
            return res.status(400).json({mensagem : "Pontuação deve ser entre 0 e 100"});
        }
        if(req.body.bimestre < 1 || req.body.bimestre > 4) {
            console.log('400');
            return res.status(400).json({mensagem : "bimestre deve ser entre 0 e 4"});
        }
        nota.User = req.body.User;
        nota.Materia = req.body.Materia;
        nota.pontuacao = req.body.pontuacao;
        nota.bimestre = req.body.bimestre;
        nota.criado_em = req.body.criado_em;
        nota.atualizado_em = req.body.atualizado_em;
        nota = await Nota.update(nota); //faz o update
        return res.json({mensagem : 'Atualizar a Nota ' + id + ' com os dados do post' + nota});
    },

    async delete(req, res){
        var id = req.query.id;
        let nota = await Nota.findById(id);
        await Nota.deleteOne(nota);
        return res.json({mensagem : 'Deleta o medico clinica ' + id});
    },

    async notaMateria(req, res){
        var materia = req.query.Materia;
        var user = req.query.User;
        let notas = await Nota.find({ User: {$eq: user}, Materia: {$eq: materia}});
        return res.json(notas);
    }
}