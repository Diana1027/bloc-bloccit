/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-console */
const http = require('http');
const app = require('./app');

const server = http.createServer(app);

server.listen(3000);

server.on('listening', () => {
  console.log('server is listening for requests on port 3000');
});
