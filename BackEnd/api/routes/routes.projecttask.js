const express = require('express');
const { ProjectTask } = require('../models/projecttask.model');
const { ProjectTaskProduct } = require('../models/projecttaskproduct.model');
const { Task } = require('../models/task.model');
const { Company } = require('../models/company.model');
const { TaskType } = require('../models/tasktype.model');
const router = express.Router();

router.get('/:projectTaskID',  function(request, response) {
    ProjectTask.findOne({ 
        where: {id: request.params.projectTaskID},
        include: [
            {model: Task, attributes: ['id', 'name']}, 
            {model: Company, attributes: ['id', 'name']},
            {model: TaskType, attributes: ['id', 'name']}
        ],
        attributes: ['id','start_date', 'end_date', 'approx_val']
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