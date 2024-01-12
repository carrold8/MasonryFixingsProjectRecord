const express = require('express');

exports.userAuth = (req, res, next) => {
    const session = req.session;
    console.log('Session: ', session)
    if(session){
        console.log('session found');
        next();
        
    }
    else{
        return res.status(401).send('Unauthorised Request')
    }
}