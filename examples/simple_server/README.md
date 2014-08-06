# Simple server

## Usage

Browserify the latest js scripts and start the server

```
$ browserify -r crowd-rest -r crowd-client -o  examples/simple_server/public/bundle.js
$ node server.js
```

Navigate to `http://localhost:8080` and your browser is now getting new tasks and executing them.