# Simple server

## Usage

Browserify the latest js scripts and start the server

```
$ browserify examples/simple_server/public/my_crowd.js -o  examples/simple_server/public/bundle.js
$ node server.js
```

Navigate to `http://localhost:8080` and your browser is now getting new tasks and executing them.