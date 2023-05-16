/*
Creating a first instance of a local server using nodejs
We use http object and its methods to achieve that
*/
const http = require('http');
//Create a server instance takes a function with 2 parameters, request and response
const server = http.createServer((req, res) => {
    console.log('request made');
});

//Starting the server to listen on localhost:3000
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});