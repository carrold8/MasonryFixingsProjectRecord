


module.exports = () => {
    const tutorials = require('../controllers/tutorials.controller.js');
    
    var router = require('express').Router();
    
    // Creating a new Tutorial
    router.post('/', tutorials.create);
    
    // Retrieving all the Tutorials
    router.get('/', tutorials.findAll);
    
    // Retrieving all the published Tutorials
    router.get('/published', tutorials.findAllPublished);
    
    // Retrieving a single Tutorial with id
    router.get('/:id', tutorials.findOne);
    

    
    app.use('/api/tutorials', router);
    };