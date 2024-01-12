const express = require('express');
const router = express.Router();
const {userAuth, managementAuth} = require('./routes.sessionauth');

router.get('/', managementAuth, function(request, response) {
    response.status(200);
    // const userRole = request.session.user.role;
    // console.log('Role: ', userRole);
    // if(userRole === 'Sales'){
    //     response.json({management: false});
    // }
    // else{
    //     response.json({management: true});
    // }
});

module.exports = router;