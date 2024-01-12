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

exports.managementAuth = (req, res, next) => {
    const sessionUser = req.session.user;
    if(sessionUser){
        if(sessionUser.role === 'Sales'){
            res.status(401).send('Unauthorised request. Wrong role')
        }
        else{
            next();
        }
    }
    else{
        return res.status(401).send('Unauthorised Request')
    }
}