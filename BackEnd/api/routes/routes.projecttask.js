const express = require('express');
const { ProjectTask } = require('../models/projecttask.model');
const { ProjectTaskProduct } = require('../models/projecttaskproduct.model');
const { Task } = require('../models/task.model');
const { Company } = require('../models/company.model');
const { TaskType } = require('../models/tasktype.model');
const { Product } = require('../models/product.model');
const { Op } = require('sequelize');
const router = express.Router();


router.get('/upcoming', function(request, response) {
    ProjectTask.findAll({where: 
        {user_id: request.session.user.id, start_date: {[Op.gte]: Date()} },
    })
    .then(function(upcomingTasks){
        response.json(upcomingTasks);
    })
})

router.get('/:projectTaskID', function(request, response) {
    ProjectTask.findOne({ 
        where: {id: request.params.projectTaskID},
        include: [
            {model: Task, attributes: ['id', 'name']}, 
            {model: Company, attributes: ['id', 'name']},
            {model: TaskType, attributes: ['id', 'name']}
        ],
        attributes: ['id','start_date', 'end_date', 'approx_val', 'user_id']
    })
    .then(function(projectTasks) {
        response.json(projectTasks);
    })
});


router.delete('/:projectTaskID', function(request, response) {

    const sessionUser = request.session.user;
    
    ProjectTask.findOne({where: {id: request.params.projectTaskID}})
    .then(function(projectTask) {
        if(sessionUser.id === projectTask.user_id || sessionUser.role !== 'Sales'){
            ProjectTaskProduct.destroy({
                where: {project_task_id: request.params.projectTaskID}
            })
            .then(function() {
                ProjectTask.destroy({ 
                    where: {id: request.params.projectTaskID},
                })
                .then(function(projectTasks) {
                    response.json(projectTasks);
                })
            })
        }
        else{
            response.status(401).json({
                logout: false, 
                message: 'Oops! It looks like you are not authorised to perform this operation'
            });
        }
    })
});


router.get('/:projectTaskID/product-list', function(request, response) {
    ProjectTaskProduct.findAll({ 
        where: {project_task_id: request.params.projectTaskID}
    })
    .then(function(projectTasksProducts) {
        response.json(projectTasksProducts);
    })
});

router.post('/:projectTaskID/products', function(request, response) {

    const sessionUser = request.session.user;
    
    ProjectTask.findOne({where: {id: request.params.projectTaskID}})
    .then(function(projectTask) {
        if(sessionUser.id === projectTask.user_id || sessionUser.role !== 'Sales'){
            ProjectTaskProduct.create({ 
                project_task_id: request.params.projectTaskID,
                product_id: request.body.product_id,
                quantity: request.body.quantity
            })
            .then(function(projectTasksProducts) {
                response.json(projectTasksProducts);
            })
        }
        else{
            response.status(401).json({
                logout: false, 
                message: 'Oops! It looks like you are not authorised to perform this operation'
            });
        }
    })
    
});


router.get('/:projectTaskID/products/:projectTaskProductID', function(request, response) {
    ProjectTaskProduct.findOne({
        include: [{model: Product, attributes: ['id', 'name']}],
        where: {id: request.params.projectTaskProductID}
    })
    .then(function(projectTasksProduct) {
        response.json(projectTasksProduct);
    })
});

router.put('/:projectTaskID/products/:projectTaskProductID', function(request, response) {
    
    const sessionUser = request.session.user;
    
    ProjectTask.findOne({where: {id: request.params.projectTaskID}})
    .then(function(projectTask) {
        if(sessionUser.id === projectTask.user_id || sessionUser.role !== 'Sales'){
            ProjectTaskProduct.update({ 
                product_id: request.body.product_id,
                quantity: request.body.quantity
            }, {where: {id: request.params.projectTaskProductID}})
            .then(function(projectTasksProducts) {
                response.json(projectTasksProducts);
            })
        }
        else{
            response.status(401).json({
                logout: false, 
                message: 'Oops! It looks like you are not authorised to perform this operation'
            });
        }
    })    
});

router.delete('/:projectTaskID/products/:projectTaskProductID',  function(request, response) {

    const sessionUser = request.session.user;
    
    ProjectTask.findOne({where: {id: request.params.projectTaskID}})
    .then(function(projectTask) {
        if(sessionUser.id === projectTask.user_id || sessionUser.role !== 'Sales'){
            ProjectTaskProduct.destroy({
                where: {id: request.params.projectTaskProductID}
            })
            .then(function(projectTasksProduct) {
                response.json(projectTasksProduct);
            })
        }
        else{
            response.status(401).json({
                logout: false, 
                message: 'Oops! It looks like you are not authorised to perform this operation'
            });
        }
    })
});


module.exports = router;