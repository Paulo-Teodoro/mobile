const Falta = require('../model/Falta');

module.exports = {
    async index(req, res){ // busca todos os registros
        let faltas = await Falta.find();
        return res.json(faltas);
    },

    async store(req, res){ //grava a clinica no banco
        const {User, Materia, faltas, bimestre, criado_em, atualizado_em} = req.body;
        if(req.body.faltas < 0) {
            console.log('400');
            return res.status(400).json({mensagem : "Faltas deve ser maior ou igual a zero"});
        }
        if(req.body.bimestre < 0 || req.body.bimestre > 4) {
            console.log('400');
            return res.status(400).json({mensagem : "bimestre deve ser entre 0 e 4"});
        }
        const falta = await Falta.create({User, Materia, faltas, bimestre, criado_em, atualizado_em});
        return res.json(falta);
    },

    async update(req,res){ //edita
        var id = req.query.id; //pega o id na url
        let falta = await Falta.findById(id); //busca a falta pelo id
        if(req.body.faltas < 0) {
            console.log('400');
            return res.status(400).json({mensagem : "Faltas deve ser maior ou igual a zero"});
        }
        if(req.body.bimestre < 1 || req.body.bimestre > 4) {
            console.log('400');
            return res.status(400).json({mensagem : "bimestre deve ser entre 0 e 4"});
        }
        falta.User = req.body.User;
        falta.Materia = req.body.Materia;
        falta.faltas = req.body.faltas;
        falta.bimestre = req.body.bimestre;
        falta.criado_em = req.body.criado_em;
        falta.atualizado_em = req.body.atualizado_em;
        falta = await Falta.update(falta); //faz o update
        return res.json({mensagem : 'Atualizar a Falta ' + id + ' com os dados do post' + falta});
    },

    async delete(req, res){
        var id = req.query.id;
        let falta = await Falta.findById(id);
        await Falta.deleteOne(falta);
        return res.json({mensagem : 'Deleta o medico clinica ' + id});
    },

    async faltaMateria(req, res){
        var materia = req.query.Materia;
        var user = req.query.User;
        let faltas = await Falta.find({ User: {$eq: user}, Materia: {$eq: materia}});
        return res.json(faltas);
    }
}