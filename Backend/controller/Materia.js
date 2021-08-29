const Materia = require('../model/Materia');

module.exports = {
    async index(req, res){ // busca todos os registros
        let materias = await Materia.find().sort({name:1})
        return res.json(materias)
    },

    async store(req, res){ //grava a Materia no banco
        const {name} = req.body;
        const materia = await Materia.create({name});
        return res.json(materia);
    },

    async update(req,res){ //edita
        var id = req.query.id; //pega o id na url
        let materia = await Materia.findById(id); //busca a Materia pelo id
        materia.name = req.body.name;
        materia = await Materia.update(materia); //faz o update
        return res.json({mensagem : 'Atualizar a Materia ' + id + ' com os dados do post ' + materia.name});
    },

    async delete(req, res){
        var id = req.query.id;
        let materia = await Materia.findById(id);
        await Materia.deleteOne(materia);
        return res.json({mensagem : 'Deleta o usuario ' + id});
    },
}