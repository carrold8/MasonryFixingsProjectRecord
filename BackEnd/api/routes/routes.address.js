const express = require('express');
const { Address } = require('../models/address.model');
const router = express.Router();

router.get('/:addressID', function(request, response){
    Address.findOne({where: {id: request.params.addressID}})
    .then(function(address){
        response.json(address);
    })
})


module.exports = router;