const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const customerSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

customerSchema.methods.generateHash = function(password){
    return bcrypt.hashSync (password, bcrypt.genSaltSync(8, null));
}

customerSchema.methods.validPassword - function(password){
    return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('Customer', customerSchema);