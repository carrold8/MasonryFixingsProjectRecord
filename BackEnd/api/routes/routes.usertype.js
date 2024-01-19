const express = require('express');
const router = express.Router();
const {managementAuth} = require('./routes.sessionauth');

router.get('/', managementAuth, function(request, response) {
    response.status(200).send('success');
});

module.exports = router;