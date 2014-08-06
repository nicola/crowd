module.exports = Crowd

var EventEmitter = require('events').EventEmitter
var util = require('util')

function Crowd () {
  var args = arguments
  this.code = undefined
  this.data = {}
  this.opts = {}

  if (typeof args[0] == 'function' && typeof args[1] != 'function' ) {
    this.code = args[0]
    if (args[1]) this.opts = args[1]
  } else {
    this.data = args[0]
    this.code = args[1]
    if (args[2]) this.opts = args[2]
  }

  if (this.opts.limit) {
    this.numRequests = 0
    this.on('data', function (stream) {
      this.numRequests++;
    });
  }
  return this
}
util.inherits(Crowd, EventEmitter);

Crowd.prototype.prepare = function() {
  var sending = {}

  if (this.data) sending.data = JSON.stringify(this.data),
  sending.code = this.code.toString()

  return sending
}

Crowd.prototype.handleResult = function(result, callback) {
  this.emit('data', result)
  if (this.opts.limit >= this.numRequests) {
    this.emit('end', result)
    callback(true, "No more tasks")
  } else {
    callback(null)
  }
}
