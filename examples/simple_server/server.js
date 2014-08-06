var Crowd = require('../../index.js')
var router = require('crowd-express')

function task (data, next) {
  console.log("data", data, "next", next)
  next(null, data.x+data.y)
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
app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res){
  res.render('./public/index.html')
})
app.listen(port)