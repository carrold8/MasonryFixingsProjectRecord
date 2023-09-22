const express = require('express');
const { Task } = require('../models/task.model');
const { ProjectTask } = require('../models/projecttask.model');
const router = express.Router();



// router.get('/:projectID/tasks',  function(request, response) {
//     ProjectTask.findAll({ 
//         where: {project_id: request.params.projectID},
//         include: {all: true, nested: true},
//         attributes: ['id']
//     })
//     .then(function(address) {
//       response.json(address);
//     })
//    });

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

   module.exports = router;