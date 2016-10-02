'use strict'
const User = require('../models/user')

let userLoggedIn = function (req, res, next) {
  let userEmail = req.get('email')
  let authToken = req.get('auth_token')

  if (!userEmail || !authToken) return res.status(401).json({error: 'Unauthorized access'})

  User.findOne({email: userEmail, auth_token: authToken}, (err, user) => {
    if (err || !user) return res.status(401).json({error: 'Unauthorized access'})

    req.currentUser = user
    next()
  })
}

let userSignUp = function (req, res) {
    if (!req.body.signUpToken || req.body.signUpToken !== process.env.SIGNUP_TOKEN) return res.status(401).json({message: 'Invalid token'})
    var makeUser = new User()
    makeUser.email = req.body.email
    makeUser.password = req.body.password
    makeUser.name = req.body.name
    
    makeUser.save(function (err, result) {
       return err ? res.status(401).json({message: 'Unable to save data. Please contact administrator.'}) 
       : res.status(201).json({message: 'User saved!'})
    })
}

let userLogin = function (req, res) {
  if (!req.body.email || !req.body.password) res.status(401).json('Invalid email or password')
  else {
    User.findOne({email: req.body.email}, function (err, user) {
      if (err) return res.status(401).json(`Error occured: ${err}`)

      user.authenticate(req.body.password, (err, isMatch) => {
        if (err || !isMatch) return res.status(401).json({message: `Invalid email or password`})
        return res.status(200).json({message: 'logging you in', auth_token: user.auth_token})
      })
    })
  }
}


module.exports = {
    userSignUp: userSignUp,
    userLogin: userLogin,
    userLoggedIn: userLoggedIn
}