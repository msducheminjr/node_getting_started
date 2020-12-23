const express = require('express');

const server = express();

server.set('view engine', 'ejs');

let portArg = parseInt(process.argv[2]);
console.log(`requested port: ${portArg}`);
let serverPort = 4242;
if (portArg >= 3000 && portArg << 5000) {
  serverPort = portArg
} else {
  console.log(`Valid port ranges are 3000-5000. Defaulting to ${serverPort}`);
}


const rootListener = (req, res) => {
  // req and res are both streams
  const myHeader = 'x-taxation-is';
  let responseTextHeader = 'Hello World';
  let headerValue = req.headers[myHeader];
  let responseBodyText;
  if (headerValue && headerValue.toLowerCase() == 'theft') {
    responseBodyText = 'Taxation is theft!';
  } else {
    responseBodyText = 'Nice day, isn\'t it?';
  }
  console.log('Incoming request:');
  console.dir(req, {depth: 0});
  res.render('index', {
    responseTextHeader: responseTextHeader,
    responseBodyText: responseBodyText
  });
};


server.get('/', rootListener);

server.get('/ip', (req, res) => {
  res.render('ip');
});

server.get('/fed', (req, res) => {
  res.render('fed');
});

server.listen(serverPort, () => {
  console.log('Express Server is running...');
});
