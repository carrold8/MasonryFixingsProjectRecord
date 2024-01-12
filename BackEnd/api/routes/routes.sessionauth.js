const express = require('express');

exports.userAuth = (req, res, next) => {
    const sessionUser = req.session.user;
    if(sessionUser){
        next();
    }
    else{
        return res.status(401).send('Unauthorised Request')
    }
}