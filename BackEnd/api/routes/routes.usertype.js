const express = require('express');
const router = express.Router();
const {userAuth} = require('./routes.sessionauth');

router.get('/', userAuth, function(request, response) {
    const userRole = request.session.role;
    if(userRole === 'Sales'){
        response.json({management: false});
    }
    else{
        response.json({management: false});
    }
});

module.exports = router;