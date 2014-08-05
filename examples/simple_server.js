var Crowd = require('../index.js')
var router = require('crowd-express')

function task (data) {
  // some calculations
  return result 
}
var crowd = new Crowd({x:1, y:2}, task)
  .on('data', function(data) {
    // data coming in real time
  })
  .on('end', function(results) {
    // task completed
  })
  .on('error', function(err) {
    // errors on the way
  })

var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var port = process.env.PORT || 8080
app.use(bodyParser())
app.use('/task', router(crowd))
app.listen(port)