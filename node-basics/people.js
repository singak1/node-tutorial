/* creating a file to be imported */

const people = ["mario", "peach", "yoshi", "bowser"];
const ages = [21, 20, 30, 35];

//module.exports = people; Exports the people array to the importing module

//Exports both the people array and ages array to the importing module
module.exports = {
    people: people,
    ages: ages
};