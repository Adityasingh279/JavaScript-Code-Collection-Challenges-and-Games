//Chapter 1 'Basic'

// Printing
console.log('Hello World');

// Variables
let name = 'Peter Parker'; // Use 'let' to declare variables
console.log(name);

// Variables referring to the stored value
let name1 = 'Dennis';
console.log(name1); // Outputs: Dennis

// Same as above
console.log('Dennis');

// Comments: Notes within code for developers (like i'm doing this)
// For example: Variables, Comments, etc.

// Operators
let food = 20;
console.log(food);

// Operators: Assigning values, comparing values, arithmetic operations
// Example: calculating tip amount
let tipPercentage = 0.2;
let tipAmount = food * tipPercentage;
console.log(tipAmount);

//...
// Explanation: Anything with two quotes around it '20', 'hello', "yellow", etc., is a string
// Explanation: JS variables can hold different data types: strings, numbers, objects, and more

// Conversion: We can convert normal strings to numbers using Number()
// Example: Number("100") converts the string '100' to the number 100

// Example: Prompt user for input, convert to numbers, calculate tip amount and total(prompt and alert will only work on browser)
let food1 = Number(prompt('Enter the cost of the food:'));
let tipPercentage1 = Number(prompt('Enter the tip percentage:'));

// Calculate tip amount and total
let tipAmount1 = food1 * (tipPercentage1 / 100); // Convert percentage to decimal
let total = food + tipAmount1;

// Output results
console.log(tipAmount1);
console.log(total);
//or
console.log('Tip Amount:', tipAmount1);
console.log('Total Cost:', total);

// // Alternatively, you can use string interpolation for better readability
// console.log(`Tip Amount: ${tipAmount1}`);
// console.log(`Total Cost: ${total}`);







// Chapter 2: 'Baby Weather App'

// Data Types:
// - Numbers: Any kind of numbers, including decimals. (1, 1.25, 3.07)
// - String: Zero or more characters written inside quotes. ('Hello', "hello")
// - Boolean: True / False (1 or 0)
// - Object: const person = { firstName: "John", lastName: "Doe" };
// - Array: const cars = ["Maruti", "Volvo", "BMW"];
// - Date: const date = new Date("2022-03-25");

// Math Operations:
// - Add: console.log(2 + 4);
// - Subtract: console.log(4 - 2);
// - Multiply: console.log(2 * 4);
// - Divide: console.log(4 / 2);
// - Exponents: console.log(2 ** 5); // 2**5 = 2*2*2*2*2 = 32
// - Modulo (Remainder): console.log(6 % 2);

// Examples:

// Object Example
const person = { 
    firstName: "John", 
    lastName: "Doe" 
  };
  
  // Array Example
  const cars = ["Maruti", "Volvo", "BMW"];
  
  // Date Example
  const date = new Date("2022-03-25");
  
  // Math Operations Examples
  console.log("Add:", 2 + 4);
  console.log("Subtract:", 4 - 2);
  console.log("Multiply:", 2 * 4);
  console.log("Divide:", 4 / 2);
  console.log("Exponents:", 2 ** 5); // 32
  console.log("Modulo (Remainder):", 6 % 2);
  
  
  // Math Methods:
// - The Math.floor() method rounds a number down to the nearest integer and returns the result (round down).
// - The Math.ceil() method rounds a number up to the nearest integer and returns the result (round up).

// Examples:
const floorResult = Math.floor(2.5); // Result: 2
const ceilResult = Math.ceil(2.5);   // Result: 3

// The Math.random() method returns a random number between 0 (inclusive) and 1 (exclusive).

// Examples:
const randomBetween0And1 = Math.random();     // Random number between 0 and 1
const randomBetween0And3 = Math.random() * 3; // Random number between 0 and 3

const randomIntegerBetween0And2 = Math.floor(Math.random() * 3);
// Random integer between 0, 1, and 2



// Variable Types: There are three types of variables:
// - const: The value cannot be changed.
// - let: The value can be changed.
// - var: The value can be changed (not recommended).

// Examples:
const constantValue = 10;  // Const example
let changeableValue = 20; // Let example
var oldStyleValue = 30;    // Var example (not recommended)

// Note: It's generally recommended to use const and let over var in modern JavaScript.



// Conditional Operators: Used in statements to compare variables, values, and/or data types.
// They always return a boolean (true or false): ==, ===, >, <, <=, >=, !=, !==

// (i) == (Double equal) - checks for equality
let x = 10;
console.log(x == 8);    // false
console.log(x == 5);    // false
console.log(x == '5');  // true (coz both are strings)

// (ii) === (Triple equal sign) - checks for equality & data type
console.log(x === 5);   // true
console.log(x === '5');  // false - because data types are different

// Example:
console.log('1' === 1); // false - checks for both value and type

console.log('1' == 1);  // true - checks only for value

// (iii) >, < - greater than, less than
console.log(8 > x);     // true
console.log(x < 8);     // false

// (iv) >=, <= - greater than or equal to, less than or equal to
console.log(35 >= x);   // true
console.log(8 <= x);    // true

// (v) != - not equal to
console.log(x != 8);    // true

// (vi) !== - not equal value or type
console.log(x !== "35"); // true - same value, different type
console.log(x !== 35);   // false - same value, same type



//Logical Operators: to perform logical operations on boolean values
//(i) '||' (Logical OR):
//=> It returns 'true' if at least one of the operands is 'true'
//=> If both operands are 'false', it returns 'false'
//ex: let result= false||true; //result is true

//(ii) '&&' (Logical AND):
//=> It returns 'true' only if both operands are 'true'
//=> If any of the operands is 'false', it returns 'false'
//ex: let result= true&&false; //return is false

//(iii) '!' (Logical NOT): 
//=> Returns the opposite of the operand's boolean value.
// !true   // false
// !false   // true



// Example: Weather Condition Check

// Prompt user for weather input
let weather = prompt('How is the weather?');

// Convert input to lowercase to make the comparison case-insensitive
weather = weather.toLowerCase();

// Check weather condition
if (weather === 'rainy') {
    console.log('Grab your umbrella.');
} else {
    console.log('Wear your sunglasses.');
}