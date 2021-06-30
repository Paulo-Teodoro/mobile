const Especialidade = require('../model/Especialidade');

module.exports = {
    async index(req, res){ // busca todos os registros
        let especialidades = await Especialidade.find()
        return res.json(especialidades);
    },

    async store(req, res){ //grava a especialidade no banco
        const {titulo, subtitulo, texto, imagem, criado_em, atualizado_em, status} = req.body;
        const especialidade = await Especialidade.create({titulo, subtitulo, texto, imagem, criado_em, atualizado_em, status});
        return res.json(especialidade);
    },

    async update(req,res){ //edita
        var id = req.query.id; //pega o id na url
        let especialidade = await Especialidade.findById(id); //busca a especialidade pelo id
        especialidade.titulo = req.body.titulo;
        especialidade.subtitulo = req.body.subtitulo;
        especialidade.texto = req.body.texto;
        especialidade.imagem = req.body.imagem;
        especialidade.criado_em = req.body.criado_em;
        especialidade.atualizado_em = req.body.atualizado_em;
        especialidade.status = req.body.status;
        especialidade = await Especialidade.update(especialidade); //faz o update
        return res.json({mensagem : 'Atualizar o especialidade ' + id + ' com os dados do post ' + especialidade.nome});
    },

    async delete(req, res){
        var id = req.query.id;
        let especialidade = await Especialidade.findById(id);
        await Especialidade.deleteOne(especialidade);
        return res.json({mensagem : 'Deleta a especialidade ' + id});
    }
};