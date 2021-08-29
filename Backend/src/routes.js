const express = require('express');
const UserController = require('../controller/User');
const MedicoController = require('../controller/Medico');
const ClinicaController = require('../controller/Clinica');
const EspecialidadeController = require('../controller/Especialidade');
const MedicoClinicaController = require('../controller/MedicoClinica');
const MateriaController = require('../controller/Materia');
const NotaController = require('../controller/Nota');
const FaltaController = require('../controller/Falta');

const routes = express.Router();

//GET => Usado somente para buscar informação (no maximo, mandar alguma query) - read
//POST => Usado para enviar dados de formularios - create
//PUT => Usado para atualização, recebe parametro tanto query, - update
//DELETE => Usado para exclusão... parametro são via query - delete

routes.get('/', (req, res) =>{
    var id = req.query.id;
    return res.json({mensagem : 'pagina principal'})
});

routes.get('/user', UserController.index);
routes.post('/user', UserController.store); 
routes.put('/user', UserController.update); 
routes.delete('/user', UserController.delete); 
routes.post('/user/validation', UserController.validation)

routes.get('/medico', MedicoController.index);
routes.post('/medico', MedicoController.store);
routes.put('/medico', MedicoController.update);
routes.delete('/medico', MedicoController.delete);

routes.get('/materia', MateriaController.index);
routes.post('/materia', MateriaController.store);
routes.put('/materia', MateriaController.update);
routes.delete('/materia', MateriaController.delete);

routes.get('/nota', NotaController.index);
routes.post('/nota', NotaController.store);
routes.put('/nota', NotaController.update);
routes.delete('/nota', NotaController.delete);
routes.get('/nota-materia', NotaController.notaMateria);

routes.get('/falta', FaltaController.index);
routes.post('/falta', FaltaController.store);
routes.put('/falta', FaltaController.update);
routes.delete('/falta', FaltaController.delete);
routes.get('/falta-materia', FaltaController.faltaMateria);

routes.get('/clinica', ClinicaController.index);
routes.post('/clinica', ClinicaController.store);
routes.put('/clinica', ClinicaController.update);
routes.delete('/clinica', ClinicaController.delete);

routes.get('/especialidade', EspecialidadeController.index);
routes.post('/especialidade', EspecialidadeController.store);
routes.put('/especialidade', EspecialidadeController.update);
routes.delete('/especialidade', EspecialidadeController.delete);

routes.get('/medico-clinica', MedicoClinicaController.index);
routes.post('/medico-clinica', MedicoClinicaController.store);
routes.put('/medico-clinica', MedicoClinicaController.update);
routes.delete('/medico-clinica', MedicoClinicaController.delete);

module.exports = routes;