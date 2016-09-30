'use strict'
const User = require('../models/user')

let userSignUp = function (req, res) {
    if (!req.signUpToken || req.signUpToken !== '') return res.status(401).json({error: 'Invalid token'})
    let makeUser = new User()
    makeUser.email = req.email
    makeUser.password = req.password
    makeUser.name = req.name
    
    makeUser.save(function (err, result) {
       return err ? res.status(401).json({error: 'Unable to save data. Please contact administrator.'}) 
       : res.status(201).json({message: 'User saved!'})
    })
    
}

module.exports = {
    userSignUp: userSignUp
}