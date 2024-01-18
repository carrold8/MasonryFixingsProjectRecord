const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { User } = require('../models/user.model');
const {userAuth} = require('./routes.sessionauth');

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
                
                request.session.user = {
                    id: loginUser.id,
                    first_name: loginUser.first_name,
                    last_name: loginUser.last_name,
                    role: loginUser.role,
                };
                response.send(user + ' is logged in');
            }
            else{
                response.status(401).send('Incorrect Password');
            }
        }
    })
   });

router.get('/logout', userAuth, function(req, res){
    const userName = req.session.user.username
    req.session.destroy(function(err){
        res.status(200).send(userName + ' successfully logged out');
    });
})


module.exports = router;