/*
    Use stream buffers to read long files and writestream to write to a file in chunks
*/

const fs = require('fs');

//creating the readstream using fs.createReadStream() function
const readStream = fs.createReadStream('./docs/blogtest1.txt', {encoding: 'utf-8'});
//creating the writestream using fs.creatWriteStream() funciton
const writeStream = fs.createWriteStream('./docs/blogtest3.txt');

//Turing the readstream on and accepting data in chunks
readStream.on('data', (chunk) => {
    console.log('-----NEW CHUNK-----');
    console.log(chunk);
    //Writing to the writestream using .write function and passing the read chunks
    writeStream.write('\nNEW CHUNK\n');
    writeStream.write(chunk);
});

/*
We can also use pipe to achieve the above using pipe as:
readStream.pipe(writeStream);
*/