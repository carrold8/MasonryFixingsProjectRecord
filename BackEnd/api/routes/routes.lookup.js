const express = require('express');
const { County } = require('../models/county.model');
const { Country } = require('../models/country.model');
const { CompanyType } = require('../models/companytype.model');
const { EmployeeType } = require('../models/employeetype.model');
const router = express.Router();


router.get('/county',  function(request, response) {
    County.findAll()
    .then(function(counties) {
        response.json(counties);
    })
});

router.get('/country',  function(request, response) {
    Country.findAll()
    .then(function(counties) {
        response.json(counties);
    })
});

router.get('/company-type',  function(request, response) {
    CompanyType.findAll()
    .then(function(companies) {
        response.json(companies);
    })
});

router.get('/employee-type',  function(request, response) {
    EmployeeType.findAll()
    .then(function(employeeType) {
        response.json(employeeType);
    })
});

module.exports = router;