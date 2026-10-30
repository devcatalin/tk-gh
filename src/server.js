// Served at / for the Playwright home page title test
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<html><head><title>tk-gh shop</title></head><body><h1>Shop</h1></body></html>');
});

server.listen(process.env.PORT || 3000);
