/*
Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter.
*/



// create function after
function after(number, callback) {
    // Input: number - number of times for function to be called before executing the callback
    // input: callback - function to be executed
    // Output: callback after the number of times this function has been called is satisfied

    // define a counter for how many times this callback has been called
    let counter = 0;
    
    function callingYouBack (...args) {
        // update counter
        counter += 1;
        // if counter above a certain number, then execute function
        if(counter >= number) {
            // execute callback
            return callback(...args)
        }
    }
    return callingYouBack;
}

const called = function(string) { return('hello ' + string); };
const afterCalled = after(3, called);

// UNCOMMENT THESE LINES TO TEST YOUR WORK
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> 'hello world' is printed