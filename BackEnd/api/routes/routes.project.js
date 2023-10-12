const express = require('express');
const { Task } = require('../models/task.model');
const { ProjectTask } = require('../models/projecttask.model');
const { InductionRegister } = require('../models/inductionregister.model');
const { AnchorTraining } = require('../models/anchortraining.model');
const { User } = require('../models/user.model');
const { Project } = require('../models/project.model');
const router = express.Router();



router.get('/',  function(request, response) {
    Project.findAll({ 
        // include: {all: true, nested: true},
    })
    .then(function(projects) {
      response.json(projects);
    })
   });
   
   router.get('/:projectID',  function(request, response) {
    Project.findOne({ 
        // include: {all: true, nested: true},
        where: {id: request.params.projectID},
    })
    .then(function(project) {
      response.json(project);
    })
   });
router.post('/',  function(request, response) {
Project.create({ 
   name: request.body.name,
   cis_id: request.body.cis_id
})
.then(function(newProject) {
    response.json(newProject);
})
});

router.get('/:projectID/tasks',  function(request, response) {
    ProjectTask.findAll({ 
        where: {project_id: request.params.projectID},
        include: [{model: Task, attributes: ['stage_id']}],
        attributes: ['id']
    })
    .then(function(projectTasks) {
        response.json(projectTasks);
    })
});

router.get('/:projectID/inductions',  function(request, response) {
    InductionRegister.findAll({ 
        where: {project_id: request.params.projectID},
        include: [{model: User, attributes: ['name']}],
        attributes: ['id', 'date']
    })
    .then(function(inductions) {
        response.json(inductions);
    })
});

router.get('/:projectID/anchor-training',  function(request, response) {
    AnchorTraining.findAll({ 
        where: {project_id: request.params.projectID},
        include: [{model: User, attributes: ['name']}],
        attributes: ['id', 'date', 'note']
    })
    .then(function(inductions) {
        response.json(inductions);
    })
});

   module.exports = router;