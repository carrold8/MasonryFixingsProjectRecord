const express = require('express');

exports.userAuth = (req, res, next) => {
    console.log('got here');
    const sessionUser = req.session.user;
    console.log('Session: ', sessionUser)
    if(sessionUser){
        console.log('session found');
        next();
    }
    else{
        return res.status(401).send('Unauthorised Request')
    }
}