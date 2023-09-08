const express = require('express');
const router = express.Router();
const companyService = require('../../services/company.service');
const employeeService = require('../../services/employee.service');

router.get('/', async function(req, res, next){
    try{
        res.json(await companyService.getAll());
    } catch(err) {
        console.error(`Error while getting companies`, err.message);
    next(err);
    }
})

router.get('/:id', async function(req, res, next){

    try{
        res.json(await companyService.getByID(1, req.params.id));
    } catch(err) {
        console.error(`Error while getting companies`, err.message);
    next(err);
    }
});

router.get('/type/:company_type_id', async function(req, res, next){

    try{
        res.json(await companyService.getByComapnyTypeID(1, req.params.company_type_id));
    } catch(err) {
        console.error(`Error while getting companies`, err.message);
    next(err);
    }
});

router.get('/:id/employees', async function(req, res, next){

    try{
        res.json(await employeeService.getAllForCompany(1, req.params.id));
    } catch(err) {
        console.error(`Error while getting employees of company id:` + req.params.id, err.message);
    next(err);
    }
});

module.exports = router;