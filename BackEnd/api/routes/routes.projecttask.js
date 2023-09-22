const express = require('express');
const { ProjectTask } = require('../models/projecttask.model');
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

module.exports = router;