const {Schema, model} = require('mongoose');

const ProductViews = new Schema({
    viewedOn: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Products'
    }
})

module.exports = model('ProductViews', ProductViews);