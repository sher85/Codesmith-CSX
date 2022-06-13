/*
Now we are going to create a function addByX that returns a function that will add an input by x.
*/

//create a function addByX() {
function addByX(input) {
    //returns a function that will add input by x
    function anotherFunction (arg) {
    return console.log(input + arg);
    }
    return anotherFunction;
}

// Now call addByTwo with an input of 1 and log the output
const addByTwo = addByX(2);
addByTwo(1); //should return 3

// Now call addByTwo with an input of 2 and log the output
addByTwo(2); //should return 4
addByTwo(3); //should return 5

// Additional test cases for add by three
const addByThree = addByX(3);
addByThree(1); //should return 4
addByThree(2); //should return 5

// Additional test cases for add by four
const addByFour = addByX(4);
addByFour(4); //should return 8
addByFour(10); //should return 14
