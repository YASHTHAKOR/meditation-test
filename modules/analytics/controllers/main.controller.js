const mongoose = require('mongoose');
const modules = require('../config/modules');

const imports = modules.getImports();

const getProductViews = async (productId,startTime, endTime) => {
    let products = await imports.models.productViews.aggregate([{
        $match: {
            productId: new mongoose.Types.ObjectId(productId),
            viewedOn: {
                $gte: new Date(parseInt(startTime)),
                $lte: new Date(parseInt(endTime))
            }
        }

    }, {
        $group: {
            _id: "$userId",
            "totalValues": { "$sum": 1}
            
        }
    }]);

    return products;
}


module.exports = {
    getProductViews
}