const express = require('express');
const router = express.Router();
const addressService = require('../services/address.service');
const Address = require('../models/Address');


// router.get('/', (req, res) => {
//     Address.findAll()
//     .then(function(response) {
//         console.log(response);
//         res.send({response});
//       }).catch(function(err){
//         console.log('Oops! something went wrong, : ', err);
//       });
// } )


router.get('/', async function(req, res, next){
    try{
        res.json(await addressService.getAll());
    } catch(err) {
        console.error(`Error while getting address`, err.message);
    next(err);
    }
})

router.get('/:id', async function(req, res, next){

    try{
        res.json(await addressService.getByID(1, req.params.id));
    } catch(err) {
        console.error(`Error while getting address`, err.message);
    next(err);
    }
});

router.post('/', async function(req, res, next){

    console.log('Res in post: ', res)
    try{
        res.json(await addressService.createNew(1, req.body));
    } catch(err) {
        console.error(`Error while updating address`, err.message);
    next(err);
    }
});


module.exports = router;