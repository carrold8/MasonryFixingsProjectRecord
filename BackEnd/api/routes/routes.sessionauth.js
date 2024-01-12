const express = require('express');

exports.userAuth = (req, res, next) => {
    const sessionUser = req.session.user;
    if(sessionUser){
        next();
    }
    else{
        return res.status(401).json({logout: true});
    }
}

exports.managementAuth = (req, res, next) => {
    const sessionUser = req.session.user;
    if(sessionUser){
        if(sessionUser.role === 'Sales'){
            res.status(401).json(
                {
                    logout: false, 
                    message: 'Oops! It looks like you are not authorised to perform this operation'
                });
        }
        else{
            next();
        }
    }
    else{
        return res.status(401).json({logout: true});
    }
}