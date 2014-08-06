# crowd

### Crowd computing in Javascript. Distribute tasks to execute in other computers

![Distribute tasks](https://raw.githubusercontent.com/nicola/crowd/images/image.png)

> *Warning*: This is a super pre-alpha software. It will only works if you are brave and patient. **Watch/Star to follow with the progress**

Credits: [Planking](http://thenounproject.com/term/planking/63044) by [Matt Brooks](http://thenounproject.com/Mattebrooks/)

## Project goal

Enable a computer to distribute tasks to execute to other computers. Websites can use computing power of visitors to test performance, scientists can distributedly fold DNA, hackers can distributedly crack passwords (:/).

## Install

```
$ npm install --save crowdjs
```

## How it works

A server sends a Task to a client that will get the code, evaluate it and execute with the data, once done, return a Result to the server.

See a [working example](https://github.com/nicola/crowd/tree/master/examples/simple_server).

```javascript
// Server
var Crowd = require('crowdjs')
var router = require('crowd-express')

function task (data, next) {
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


app.use('/task', router(crowd))
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

You can avoid Express and talk with the distributed clients by sending them tasks and handling the result:

```javascript
// Send through HTTP or websockets the task
crowd.toJSON() // {"data": String, "code": String}

// Get the result from the client
crowd.handleResult(resultWeGot)
```

## State

- [x] [crowd](https://github.com/nicola/crowd)
  - [x] [crowd-express](https://github.com/nicola/crowd-express)
  - [ ] crowd-websockets
- [x] [crowd-client](https://github.com/nicola/crowd-client) (needs options)
  - [x] [crowd-rest](https://github.com/nicola/crowd-rest)
  - [ ] crowd-webworker
  - [ ] crowd-webrtc

## Other usage

Obviously this is not bound to javascript, to REST and to the browser. Server and clients will be available for WebSockets and WebRTC, and you will be free to implement any of the technology you want.

## A bit of history

About 1 year and a half ago (April 2013), [me](https://github.com/nicola), [@rmharrisom](https://github.com/rmharrisom) and [@WilliamMayor](https://github.com/WilliamMayor) met together at the [Facebook London Hackathon](https://www.facebook.com/hackathon/photos/pb.167580640987.-2207520000.1407300170./10151361980305988/?type=3&theater) and we got the 5th Prize with [CrowdTaskingJS](https://github.com/CrowdTaskingJS).

The code was very messy, and a year after, inspired by a more decentralized web from my experience in [Mozilla](https://github.com/mozilla/fireplay-sublime), I decided to clean it and wrap it up into a library that everyone can use.
