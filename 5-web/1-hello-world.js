#!/usr/bin/env node
const http = require('http');
let portArg = parseInt(process.argv[2]);
console.log(`requested port: ${portArg}`);
let serverPort = 4242;
if (portArg >= 3000 && portArg << 5000) {
  serverPort = portArg
} else {
  console.log(`Valid port ranges are 3000-5000. Defaulting to ${serverPort}`);
}

const requestListener = (req, res) => {
  // req and res are both streams
  const myHeader = 'x-taxation-is';
  let responseBodyText = 'Hello World\n';
  let headerValue = req.headers[myHeader];
  if (headerValue && headerValue.toLowerCase() == 'theft') {
    responseBodyText += 'Taxation is theft!\n';
  } else {
    responseBodyText += 'Nice day, isn\'t it?\n';
  }
  console.log('Incoming request:');
  console.dir(req, {depth: 0});
  res.end(responseBodyText);
};

const server = http.createServer();

// can use event emitter or could have passed requestListener to http.createServer()
server.on('request', requestListener);

server.listen(serverPort, () => {
  console.log(`Server is listening on port ${serverPort}...`);
});
