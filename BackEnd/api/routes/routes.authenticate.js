const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { User } = require('../models/user.model');

router.post('/', async function(request, response) {
    const user = request.body.username;
    const password = request.body.password;
    User.findOne({
        where: {username: request.body.username}
    })
    .then(async function(loginUser) {
        if(loginUser === null){
            response.status(404).send('User does not exist');
        }
        else{
            const hashedPassword = loginUser.password;

            if(await bcrypt.compare(password, hashedPassword)){
                response.send(user + ' is logged in');
            }
            else{
                response.status(401).send('Incorrect Password');
            }
        }
    //   response.json(user);
    })
   });


module.exports = router;