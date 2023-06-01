/*
Using express to listen to get requests
*/
const express = require('express');
const morgan = require('morgan');   //third party middleware
const mongoose = require('mongoose');
const blogRoutes = require('../routes/blogRoutes');


//express app
const app = express();

//connect to mongodb
const dbURI = 'mongodb+srv://<username>:<password>@node-tutorial.ul2hjkk.mongodb.net/node-tutorial?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

//register view engine
app.set('view engine', 'ejs');
//app.set('views', 'name-of-folder-containing-views'); DO THIS IF YOUR EJS FILES ARE NOT IN A FOLDER NAMED views

//Middlware and Static Files
//This makes all the files in the public foler accessible to the browser
app.use(express.static('../public'));

app.use(express.urlencoded({extended: true}));
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

/*
//Use blog model to add a blog to the db
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'new blog',
        snippet: 'about my new blog',
        body: 'more about my new blog'
    });
    blog.save()
        .then((result) =>{
            res.send(result);
        })
        .catch((err) =>{
            console.log(err);
        });
});

//get all blogs from the db
app.get('/all-blogs', (req, res) =>{
    Blog.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
});

//get a single blog from the db
app.get('/single-blog', (req, res) => {
    Blog.findById('646be41f34ef1918ecdba453')
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        })
});
*/

//Routes
//Listen for get requests to the root
app.get('/', (req, res) => {
    //res.send('<p>Home page</p>');
    //Use sendFile to the user, we need to set the root as sendFile will look for the files at the root of our PC
    //res.sendFile('./views/index.html', {root: __dirname}); This is used when our files are static HTML Files
    res.redirect('/blogs');   
});

//Listen for get requests to localhost:3000/about
app.get('/about', (req, res) => {
    //res.send('<p>Home page</p>');
    //res.sendFile('./views/about.html', {root: __dirname});
    res.render('about', {title: "About"}); //Passing title value to the EJS title to be used in index.ejs file
});

//redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

//Blog Routes
app.use(blogRoutes)

//404 page
//NOTE THIS LINE WILL ONLY EXECUTE IF ALL OTHER REQUESTS FAIL TO
app.use((req, res) => {
    //res.status(404).sendFile('./views/404.html', {root: __dirname});
    res.status(404).render('404', {title: "404"});
});