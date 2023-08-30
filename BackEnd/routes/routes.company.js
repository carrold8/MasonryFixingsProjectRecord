const express = require('express');
const router = express.Router();
const companyService = require('../services/company.service');

router.get('/', async function(req, res, next){
    try{
        res.json(await companyService.getAll());
    } catch(err) {
        console.error(`Error while getting counties`, err.message);
    next(err);
    }
})

module.exports = router;