# crowd

## Crowd computing in Javascript. Distribute tasks to execute to other computers

> *Warning*: This is a super pre-alpha software. It will only works if you are brave and patient. **Watch/Star to follow with the progress**

## Project goal

Enable a computer to distribute tasks to execute to other computers. Websites can use computing power of visitors to test performance, scientists can distributedly fold DNA, hackers can distributedly crack passwords (:/).

## Usage
Eventually one would be able to do something on these lines:

```javascript
// Server
var Crowd = require('crowd')
var router = require('crowd-express')

function task (data) {
  // some calculations
  return result 
}
var crowd = Crowd({x:1, y:2}, task)
  .on('data', function(data) {
    // data coming in real time
  })
  .on('end', function(results) {
    // task completed
  })
  .on('error', function(err) {
    // errors on the way
  })

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;
app.use('/task', router(crowd));

```

The way it will work on the client will be:

```javascript
var worker = require('crowd-webworker')
var crowd = require('crowd-client')
var rest = require('crowd-rest')

client(opts)
  .use(rest('http://127.0.0.1:1200'))
  .pipe(worker())
```

What happens in the worker is that the `task` function is retrieved from the `crowd-client`, evaluated and executed.

## State

- [ ] [crowd](https://github.com/nicola/crowd)
  - [ ] [crowd-express](https://github.com/nicola/crowd-express)
  - [ ] crowd-websockets
- [ ] crowd-client
  - [ ] crowd-rest
  - [ ] crowd-webworker
  - [ ] crowd-webrtc

## Other usage

Obviously this is not bound to javascript, to REST and to the browser. Server and clients will be available for WebSockets and WebRTC, and you will be free to implement any of the technology you want.
