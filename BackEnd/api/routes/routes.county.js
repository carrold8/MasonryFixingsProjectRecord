const express = require('express');
const router = express.Router();
const { County } = require('../models/county.model');
const {userAuth} = require('./routes.sessionauth');

router.get('/', userAuth, function(request, response) {
  County.findAll()
  .then(function(county) {
    response.json(county);
  })
 });

module.exports = router;