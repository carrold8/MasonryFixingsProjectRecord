const express = require('express');

exports.userAuth = (req, res, next) => {
    const session = req.session;

    if(!session){
        res.status(401).send('Unauthorised Request')
    }
    else{
        console.log('session found');
        next();
    }
}