const http = require('http');

const server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('hello world');
  res.end();
})

server.listen(8000, function() {
  console.log('server started on port 8000');
})