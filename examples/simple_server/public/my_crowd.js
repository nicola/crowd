var Crowd = require('crowd-client')
var rest = require('crowd-rest')

var crowd = new Crowd()
  .use(rest('http://127.0.0.1:8080/task'))
  .pipe(this)