const {Schema, model} = require('mongoose');

const Products = new Schema({
    name: {
        type: String
    }
})

module.exports = model('Products', Products);