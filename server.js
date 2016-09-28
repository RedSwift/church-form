'use strict'

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const morgan = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config()
const detailCtrl = require('./server/controllers/detail_controller')

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

app.post('/api/new', detailCtrl.newDetail)
app.get('/api/details', detailCtrl.getDetail)
app.get('/api/:id', detailCtrl.showDetail)
// app.put('/api/:id', detailCtrl.editDetail)
