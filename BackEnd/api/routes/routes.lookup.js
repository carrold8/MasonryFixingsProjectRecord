const express = require('express');
const { County } = require('../models/county.model');
const { Country } = require('../models/country.model');
const { CompanyType } = require('../models/companytype.model');
const { EmployeeType } = require('../models/employeetype.model');
const { TaskType } = require('../models/tasktype.model');
const { Category } = require('../models/category.model');
const { Sector } = require('../models/sector.model');
const { FrameMaterial } = require('../models/framematerial.model');
const { FloorMaterial } = require('../models/floormaterial.model');
const { EnvelopeMaterial } = require('../models/envelopematerial.model');
const { RoofMaterial } = require('../models/roofmaterial.model');
const { PartitioningMaterial } = require('../models/partitioningmaterial.model');
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

router.get('/task-type',  function(request, response) {
    TaskType.findAll()
    .then(function(taskType) {
        response.json(taskType);
    })
});

router.get('/category',  function(request, response) {
    Category.findAll()
    .then(function(category) {
        response.json(category);
    })
});

router.get('/sector',  function(request, response) {
    Sector.findAll()
    .then(function(sectorType) {
        response.json(sectorType);
    })
});


router.get('/frame-material',  function(request, response) {
    FrameMaterial.findAll()
    .then(function(frameMaterial) {
        response.json(frameMaterial);
    })
});

router.get('/floor-material',  function(request, response) {
    FloorMaterial.findAll()
    .then(function(floorMaterial) {
        response.json(floorMaterial);
    })
});

router.get('/envelope-material',  function(request, response) {
    EnvelopeMaterial.findAll()
    .then(function(envelopeMaterial) {
        response.json(envelopeMaterial);
    })
});

router.get('/roof-material',  function(request, response) {
    RoofMaterial.findAll()
    .then(function(roofMaterial) {
        response.json(roofMaterial);
    })
});

router.get('/partitioning-material',  function(request, response) {
    PartitioningMaterial.findAll()
    .then(function(partitioningMaterial) {
        response.json(partitioningMaterial);
    })
});



module.exports = router;