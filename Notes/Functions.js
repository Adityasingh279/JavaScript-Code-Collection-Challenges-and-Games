// Chapter 3: 'Functions'

// Functions: A JavaScript function is a block of code designed to perform a particular task and is executed when "something" calls it.

// Example: Basic Function
function sayMyName() {
    console.log('aditya');
    console.log('deepak');
    console.log('aryan');
    console.log('riya');
}
sayMyName(); // Calls the function

// Dynamic Function:
function sayMyNameDynamic(name) {
    console.log(name);
}
sayMyNameDynamic('Lance');

// Function Arguments: Values received by the function when it's called, behaving as variables within the function, however they only live within the function and cannot be accessed outside.

// String Concatenation:
function greetingConcatenation(name) {
    greet = 'hi ' + name + ', nice to meet you';
}
greetingConcatenation('aditya');

// Template Literals: An easy way to interpolate variables and expressions into strings, interpolation is an effective way of concatenation.
// Example (from the last function):
greet = `hi ${name}, Nice to meet you`;

// String Concatenation vs. Template Literals:
// => Template literals are more efficient and easier to understand.
// => String concatenation might be faster for a very small number of arguments.

// Functions: the return statement stops the execution of a function and returns a value.
// The return statement makes the function reusable.
// You can use the same function in multiple places.

// Example:
function sum(a, b) {
    return a + b;
}

// Function Reusability Example:
function calculateFoodTotal(food, tip) {
    tipPercentage = tip / 100;
    tipAmount = food * tipPercentage;
    total = sum(food, tipAmount); //reuse
    return total;
}
console.log(calculateFoodTotal(100, 20));


// ES6 Arrow Functions:
// Allow shorter function syntax.

// Regular Function (old):
function regularFunction(name) {
    console.log(`hi ${name}`);
}

// Arrow Function (new):
const arrowFunction = (name) => {
    console.log(`hi ${name}`);
};


// Arrow Function (with explicit '{}' return):
const sumArrow = (a, b) => {
    return a + b;
};

// Arrow Function (with implicit return):
const sumArrowImplicit = (a, b) => a + b;

// Note: Arrow functions are a new trend and offer a concise syntax.
