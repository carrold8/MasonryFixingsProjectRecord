const express = require('express');
const router = express.Router();
const countyService = require('../services/county.service')

router.get('/', async function(req, res, next){
    try{
        res.json(await countyService.getAll());
    } catch(err) {
        console.error(`Error while getting counties`, err.message);
    next(err);
    }
})

router.get('/:id', async function(req, res, next){

    try{
        res.json(await countyService.getByID(1, req.params.id));
    } catch(err) {
        console.error(`Error while getting counties`, err.message);
    next(err);
    }
});

module.exports = router;