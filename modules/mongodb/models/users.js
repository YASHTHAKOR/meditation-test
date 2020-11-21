const {Schema, model} = require('mongoose');

const Users = new Schema({
    name: {
        type: String
    }
})

module.exports = model('Users', Users);