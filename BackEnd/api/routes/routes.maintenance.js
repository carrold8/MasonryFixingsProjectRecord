const express = require('express');
const { User } = require('../models/user.model');
const router = express.Router();



router.post('/user', function(request, response) {
    User.create({
        name: request.body.name
    })
    .then(function(user) {
      response.json(user);
    })
   });

module.exports = router;