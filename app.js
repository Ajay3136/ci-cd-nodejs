const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
  const timeoutInMilliseconds = 15000; // 15 seconds
  setTimeout(() => {
    // Code to execute after the timeout (e.g., stop the server)
    console.log('Timeout reached. Stopping the server.');
    server.close(() => {
      console.log('Server has been stopped.');
    });
  }, timeoutInMilliseconds);
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
