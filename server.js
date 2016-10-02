'use strict'

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const morgan = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config()
const detailCtrl = require('./server/controllers/detail_controller')
const userCtrl = require('./server/controllers/user_controller')

mongoose.connect(process.env.MONGODB_URI)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/bower_components'))

app.use(morgan('dev'))

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})

// routes
app.get('/', (req, res) => {
  res.sendFile('index.html')
})

app.post('/api/signup', userCtrl.userSignUp)
app.post('/api/login', userCtrl.userLogin)

app.post('/api/new', userCtrl.userLoggedIn, detailCtrl.newDetail)
app.get('/api/details', userCtrl.userLoggedIn, detailCtrl.getDetail)
app.get('/api/:id', userCtrl.userLoggedIn, detailCtrl.showDetail)
app.put('/api/edit/:id', userCtrl.userLoggedIn, detailCtrl.editDetail)
app.delete('/api/:id', userCtrl.userLoggedIn, detailCtrl.deleteDetail)

