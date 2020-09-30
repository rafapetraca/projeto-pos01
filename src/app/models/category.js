const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categoriaSchema = new Schema({
    nome: String,
    descricao: String
});

module.exports = mongoose.model('Categoria', categoriaSchema);
