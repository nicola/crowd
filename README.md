# crowd

## Crowd computing in Javascript. Distribute tasks to execute to other computers

> *Warning*: This is a super pre-alpha software. It will only works if you are brave and patient. **Watch/Star to follow with the progress**

![Distribute tasks](https://raw.githubusercontent.com/nicola/crowd/images/image.png)
Credits: [Planking](http://thenounproject.com/term/planking/63044) by [Matt Brooks](http://thenounproject.com/Mattebrooks/)

## Project goal

Enable a computer to distribute tasks to execute to other computers. Websites can use computing power of visitors to test performance, scientists can distributedly fold DNA, hackers can distributedly crack passwords (:/).

## Usage
Eventually one would be able to do something on these lines. See a [working example](https://github.com/nicola/crowd/tree/master/examples/simple_server).

```javascript
// Server
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
```

The way it will work on the client will be:

```javascript
var worker = require('crowd-webworker')
var crowd = require('crowd-client')
var rest = require('crowd-rest')

var crowd = new Crowd(opts)
  .use(rest('http://127.0.0.1:1200/task'))
  .pipe(worker())
  .start(opts)
```

What happens in the worker is that the `task` function is retrieved from the `crowd-client`, evaluated and executed.

## State

- [x] [crowd](https://github.com/nicola/crowd)
  - [ ] [crowd-express](https://github.com/nicola/crowd-express)
  - [ ] crowd-websockets
- [x] [crowd-client](https://github.com/nicola/crowd-client) (needs options)
  - [x] [crowd-rest](https://github.com/nicola/crowd-rest)
  - [ ] crowd-webworker
  - [ ] crowd-webrtc

## Other usage

Obviously this is not bound to javascript, to REST and to the browser. Server and clients will be available for WebSockets and WebRTC, and you will be free to implement any of the technology you want.
