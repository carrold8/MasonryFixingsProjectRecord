const express = require('express');
const router = express.Router();
const { County } = require('../models/county.model');
const {userAuth, managementAuth} = require('./routes.sessionauth');

router.get('/', managementAuth, function(request, response) {
  County.findAll()
  .then(function(county) {
    response.json(county);
  })
 });

module.exports = router;