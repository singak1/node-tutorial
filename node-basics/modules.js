/*
    importing objects using require
*/
const ppl = require('./people');
console.log(ppl.people);
console.log(ppl.ages);

//Using destructure to import only a part of the items being exported
const { people } = require('./people');
console.log(people);

//Importing the inbuilt os object
const os = require('os');
//using homedir and platform methods from os object
console.log(os.homedir(), os.platform());
