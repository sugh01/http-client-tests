const http = require('http');

const server = http.createServer((req, res) => {
  const { url } = req;
  
  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is the main page');
  } else if (url === '/redirect301') {
    res.writeHead(301, { 'Location': 'http://localhost:3000/redirected' });
    res.end();
  } else if (url === '/redirect302') {
    res.writeHead(302, { 'Location': 'http://localhost:3000/redirected' });
    res.end();
  } else if (url === '/redirected') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is the redirected page');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/');
});
