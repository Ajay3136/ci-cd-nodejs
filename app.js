const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
  
  // Set a timeout to stop the server after 10 seconds (10000 milliseconds)
  setTimeout(() => {
    console.log('Stopping the server...');
    server.close(() => {
      console.log('Server has been stopped.');
    });
  }, 9000);
});
