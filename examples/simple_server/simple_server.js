var Crowd = require('../index.js')
var router = require('crowd-express')

function task (data) {
  // some calculations
  return result 
}
var crowd = new Crowd({x:1, y:2}, task)
  .on('data', function(data) {
    // data coming in real time
    console.log("arriving", data)
  })
  .on('end', function(results) {
    // task completed
    console.log("the end")
  })
  .on('error', function(err) {
    // errors on the way
    console.log("errors", err)
  })

var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var port = process.env.PORT || 8080
app.use(bodyParser())
app.use('/task', router(crowd))
app.get('/', function(req, res){
  res.render('index.html')
})
app.listen(port)