/*
Creating a first instance of a local server using nodejs
We use http object and its methods to achieve that
*/
const http = require('http');
const fs = require('fs');

//Create a server instance takes a function with 2 parameters, request and response
const server = http.createServer((req, res) => {
    //Using the request to obtain a url path and the type of request made
    console.log(req.url, req.method);

    //Set header content type
    res.setHeader('Content-Type', 'text-html');

    //Adding basic routing to our server
    let path = './views/';
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about'); //redirect user for changed url
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }
    /* Writing a html line by line, we will learn to read html files and send them directly later
    res.write('<p>hello, world</p>');
    res.write('<p>hello again, sent from server.js</p>');
    res.end();
    */

    // Read index.html file using fs and sending passing it to the resonse
    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err);
            res.end();
        }
        res.write(data);
        res.end();
    });
});

//Starting the server to listen on localhost:3000
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});