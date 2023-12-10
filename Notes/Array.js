// Chapter 4: Arrays

// Arrays allow you to store multiple values inside of them.
// Example:
const groceries = ['banana', 'apple', 'orange', 'pears'];
console.log(groceries);

// Indexing: Index gives you the location of a value within an array. It's similar to a street number.
// Example: To get just the banana
console.log(groceries[0]);

// Array methods

// push() method: Adds one or more elements to the end of an array and returns the new length of the array.
groceries.push('cookie');
console.log(groceries);

// slice() method: Returns a portion of the array in a new array.
// Note: Starting from 0 (inclusive) and up to 2 (exclusive).
console.log(groceries.slice(0, 2));

// indexOf() method: Determines the index or position of an item in the array.
console.log(groceries.indexOf('banana'));
console.log(groceries.indexOf('orange'));

// length property: Returns the number of elements in a given array.
console.log(groceries.length);

