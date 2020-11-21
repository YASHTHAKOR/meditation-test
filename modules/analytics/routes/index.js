const express = require('express');

const router = express.Router();

const {
    getProductViews
} = require('../controllers/main.controller');


router.get('/product/views', async (req, res) => {
    try {

        let data = await getProductViews(req.query.productId,req.query.startDate, req.query.endDate);
        console.log(data);

        res.send({
            data
        })

    } catch(err) {
        console.log(err);
            res.status(500).send({
                message: 'something went wrong'
            })
    }
})

module.exports = router;