'use strict'
const mongoose = require('mongoose')
const uuid = require('uuid')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    auth_token: String
})

userSchema.pre('save', function (done) {
  const user = this

  if (!user.auth_token) user.auth_token = uuid.v4()
  bcrypt.genSalt(8, (err, salt) => {
    if (err) return done(err)

    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return done(err)
      user.password = hash
      done()
    })
  })
})

let User = mongoose.model('User', userSchema)

module.exports = User