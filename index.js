import http from 'http';
  
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1>hello world</h1>');
  res.end();
});
console.log('Server running at http://localhost:3030/')
// Start the server and listen on port 3030
server.listen(3030)