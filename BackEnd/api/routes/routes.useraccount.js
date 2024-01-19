const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { User } = require('../models/user.model');

router.get('/', function(request, response) {
    const user = request.session.user;

    User.findOne({
        where: {id: user.id},
        attributes: {exclude: ['password']}
    })
    .then(function(userDetails) {
        response.json(userDetails);
    })
});

router.put('/password', async function(request, response) {

    const hashedPassword = await bcrypt.hash(request.body.password, 10);
    User.update({
        password: hashedPassword,
    },
    {where: {id: request.session.user.id}})
    .then(function(user) {
      response.json(user);
    })
  });

module.exports = router;