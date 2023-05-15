/*
    Importing and exploring global object and some functions
*/

//console.log(global);

//This uses the setTimeout method from the global object
//Added a clearInterval method to clear out the interval below after 3 seconds
global.setTimeout(() => {
    console.log("In the timeout");
    clearInterval(interval);
}, 3000);

//This uses the setInterval method from the global object
const interval = setInterval(() => {
    console.log('Sent from the interval');
}, 1000);

/*
    Using dirname and filename from the global object
*/
const dirname = __dirname; //Gives us the current directory
const filename = __filename; //Gives us the current directory with the filename added on
console.log(`__dirname gives: ${dirname}`);
console.log(`__filename gives: ${filename}`);