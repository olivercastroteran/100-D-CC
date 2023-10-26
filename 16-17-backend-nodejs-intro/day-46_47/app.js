const http = require('http');

function handleRequest(req, res) {
  if (req.url === '/currenttime') {
    // localhost:3000/currenttime
    res.statusCode = 200;
    res.end(`<h1>${new Date().toISOString()}</h1>`);
  } else if (req.url === '/') {
    // localhost:3000
    res.statusCode = 200;
    res.end('<h1>Hello World!</h1>');
  }
}

const server = http.createServer(handleRequest);

server.listen(3000);
