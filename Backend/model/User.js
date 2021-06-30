const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name : String,
    email : String,
    ra : Number,
    pwd : String
})

module.exports = mongoose.model('User', UserSchema);