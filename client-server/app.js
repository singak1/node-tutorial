/*
Using express to listen to get requests
*/
const express = require('express');

//express app
const app = express();

//listen for request on port 3000
app.listen(3000);

//Listen for get requests to the root
app.get('/', (req, res) => {
    //res.send('<p>Home page</p>');
    //Use sendFile to the user, we need to set the root as sendFile will look for the files at the root of our PC
    res.sendFile('./views/index.html', {root: __dirname});
});

//Listen for get requests to localhost:3000/about
app.get('/about', (req, res) => {
    //res.send('<p>Home page</p>');
    res.sendFile('./views/about.html', {root: __dirname});
});

//redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

//404 page
//NOTE THIS LINE WILL ONLY EXECUTE IF ALL OTHER REQUESTS FAIL TO
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', {root: __dirname});
});