/*
    Reading/Writing/Creating/Deleting files/directories using fs object
*/

const fs = require('fs');

//reading a file -> Async function
fs.readFile('./docs/blogtest1.txt', (err, data) => {
    if(err) {
        console.log(err);
    }
    console.log(data.toString());
});

//writing to files -> Async function
fs.writeFile('./docs/blogtest2.txt', 'hello, world', () => {
    console.log("File was written");
});

//directories
//Check if the directory exists using fs.existsSync() and then creating or deleting directory using fs.mkdir or fs.rmdir async functions
if(!fs.existsSync('./assets')) {
fs.mkdir('./assets', (err) => {
    if(err) {
        console.log(err);
    }
    console.log("Directory was created");
});
} else {
    fs.rmdir('./assets', (err) => {
        if(err) {
            console.log(err);
        }
        console.log('Directory was deleted');
    });
}

//Deleting files using fs.unlink async function after checking it exists
if(fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err) {
            console.log(err);
        }
        console.log('File was deleted');
    });
}