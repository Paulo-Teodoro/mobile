const mongoose = require('mongoose');

const MateriaSchema = new mongoose.Schema({
    name : String
});

module.exports = mongoose.model('Materia', MateriaSchema);