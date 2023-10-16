const express = require('express');
const { ProjectTask } = require('../models/projecttask.model');
const { ProjectTaskProduct } = require('../models/projecttaskproduct.model');
const router = express.Router();

router.get('/:projectTaskID',  function(request, response) {
    ProjectTask.findOne({ 
        where: {id: request.params.projectTaskID},
        include: {all: true, nested: true},
    })
    .then(function(projectTasks) {
        response.json(projectTasks);
    })
});

router.get('/:projectTaskID/products',  function(request, response) {
    ProjectTaskProduct.findAll({ 
        where: {project_task_id: request.params.projectTaskID},
        include: {all: true, nested: true},
    })
    .then(function(projectTasksProducts) {
        response.json(projectTasksProducts);
    })
});

router.post('/:projectTaskID/products',  function(request, response) {
    ProjectTaskProduct.create({ 
        project_task_id: request.params.projectTaskID,
        product_id: request.body.product_id,
        quantity: request.body.quantity,
        user_id: request.body.user_id
    })
    .then(function(projectTasksProducts) {
        response.json(projectTasksProducts);
    })
});



module.exports = router;