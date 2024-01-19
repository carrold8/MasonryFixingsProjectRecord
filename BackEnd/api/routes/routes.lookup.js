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
const { Task } = require('../models/task.model');
const { User } = require('../models/user.model');
const { Stage } = require('../models/stage.model');
const { Product } = require('../models/product.model');
const router = express.Router();

router.get('/county', function(request, response) {
    County.findAll()
    .then(function(counties) {
        response.json(counties);
    })
});

router.get('/country', function(request, response) {
    Country.findAll()
    .then(function(counties) {
        response.json(counties);
    })
});

router.get('/company-type', function(request, response) {
    CompanyType.findAll()
    .then(function(companies) {
        response.json(companies);
    })
});

router.get('/employee-type', function(request, response) {
    EmployeeType.findAll()
    .then(function(employeeType) {
        response.json(employeeType);
    })
});

router.get('/task-type', function(request, response) {
    TaskType.findAll()
    .then(function(taskType) {
        response.json(taskType);
    })
});

router.get('/task', function(request, response) {
    Task.findAll({order: ['stage_id']})
    .then(function(task) {
        response.json(task);
    })
});

router.get('/task/:taskID/task-type', function(request, response) {
    TaskType.findAll({where: {task_id: request.params.taskID}})
    .then(function(taskType) {
        response.json(taskType);
    })
});

router.get('/category', function(request, response) {
    Category.findAll()
    .then(function(category) {
        response.json(category);
    })
});
router.get('/category/:categoryID/sectors', function(request, response) {
    Sector.findAll(
      {where: {category_id: request.params.categoryID}}
    )
    .then(function(catSectors) {
      response.json(catSectors);
    })
   });

router.get('/sector', function(request, response) {
    Sector.findAll()
    .then(function(sectorType) {
        response.json(sectorType);
    })
});


router.get('/frame-material', function(request, response) {
    FrameMaterial.findAll()
    .then(function(frameMaterial) {
        response.json(frameMaterial);
    })
});

router.get('/floor-material', function(request, response) {
    FloorMaterial.findAll()
    .then(function(floorMaterial) {
        response.json(floorMaterial);
    })
});

router.get('/envelope-material', function(request, response) {
    EnvelopeMaterial.findAll()
    .then(function(envelopeMaterial) {
        response.json(envelopeMaterial);
    })
});

router.get('/roof-material', function(request, response) {
    RoofMaterial.findAll()
    .then(function(roofMaterial) {
        response.json(roofMaterial);
    })
});

router.get('/partitioning-material', function(request, response) {
    PartitioningMaterial.findAll()
    .then(function(partitioningMaterial) {
        response.json(partitioningMaterial);
    })
});

router.get('/users', function(request, response) {
    User.findAll({attributes: {exclude: ['password']}})
    .then(function(users) {
        response.json(users);
    })
});

router.get('/stage', function(request, response) {
    Stage.findAll()
    .then(function(stages) {
        response.json(stages);
    })
});
router.get('/stage/:stageID/tasks', function(request, response) {
    Task.findAll({where: {stage_id: request.params.stageID}})
    .then(function(tasks) {
        response.json(tasks);
    })
});

router.get('/products', function(request, response) {
    Product.findAll()
    .then(function(products) {
        response.json(products);
    })
});



module.exports = router;