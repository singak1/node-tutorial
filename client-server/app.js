/*
Using express to listen to get requests
*/
const express = require('express');
const morgan = require('morgan');   //third party middleware

//express app
const app = express();

//register view engine
app.set('view engine', 'ejs');
//app.set('views', 'name-of-folder-containing-views'); DO THIS IF YOUR EJS FILES ARE NOT IN A FOLDER NAMED views

//listen for request on port 3000
app.listen(3000);

//Middlware and Static Files
//This makes all the files in the public foler accessible to the browser
app.use(express.static('public'));

/*Creating our own middleware to log request NOTE: next is needed to continue the request
app.use((req, res, next) => {
    console.log('\nnew request was made: ');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    next();
});*/

//Using third party middleware
app.use(morgan('tiny'));

//Listen for get requests to the root
app.get('/', (req, res) => {
    //res.send('<p>Home page</p>');
    //Use sendFile to the user, we need to set the root as sendFile will look for the files at the root of our PC
    //res.sendFile('./views/index.html', {root: __dirname}); This is used when our files are static HTML Files
    const blogs = [
        {title: 'Michael Scott Worlds Best Boss', snippet: 'Michael Scott was gifted a mug with that engraded, BY HIMSELF'},
        {title: 'XQC <3 Forsen', snippet: 'OMEGALUL DUUUUUD, You thought you were getting the lore'},
        {title: 'Sanest Felix Qoute', snippet: 'xQc : "My nose is so big, you could use it as a math problem. How tall is my nose?'},
    ];
    res.render('index', {title: "Home", blogs: blogs});   //Passing title value to the EJS title to be used in index.ejs file
});

//Listen for get requests to localhost:3000/about
app.get('/about', (req, res) => {
    //res.send('<p>Home page</p>');
    //res.sendFile('./views/about.html', {root: __dirname});
    res.render('about', {title: "About"});
});

//redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: "Create Blog"});
});

//404 page
//NOTE THIS LINE WILL ONLY EXECUTE IF ALL OTHER REQUESTS FAIL TO
app.use((req, res) => {
    //res.status(404).sendFile('./views/404.html', {root: __dirname});
    res.status(404).render('404', {title: "404"});
});