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

const server = http.createServer((req, res) => {
  const myHeader = 'x-taxation-is'
  let responseBodyText = 'Hello World\n';
  if (req.headers[myHeader] == 'Theft') {
    responseBodyText += 'Taxation is theft!\n';
  } else {
    responseBodyText += 'Nice day, isn\'t it?\n';
  }
  res.end(responseBodyText);
});

server.listen(serverPort, () => {
  console.log(`Server is listening on port ${serverPort}...`);
});
