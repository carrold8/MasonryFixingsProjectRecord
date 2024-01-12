const express = require('express');
const router = express.Router();
const {userAuth, managementAuth} = require('./routes.sessionauth');

router.get('/', managementAuth, function(request, response) {
    response.json({management: true});
});

module.exports = router;