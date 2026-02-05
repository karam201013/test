const http = require('http');

const PORT = process.env.PORT || 3000;

const requestHandler = (req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from karam201013/test — Node.js is working!\n');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
};

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
