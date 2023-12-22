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

// concat(): (concatenate) is used to concatenate arrays, creating a new array
//    - The `concat` method is used to concatenate two or more arrays or values, creating a new array without modifying the original arrays.
//    - It does not change the existing arrays; instead, it returns a new array that contains the elements of the original arrays.
//    - Example:
     const array1 = [1, 2, 3];
     const array2 = [4, 5, 6];
     const newArray = array1.concat(array2);
     console.log(newArray); // [1, 2, 3, 4, 5, 6]
     console.log(array1);   // [1, 2, 3] (unchanged)
     console.log(array2);   // [4, 5, 6] (unchanged)

//      join(): is used to concatenate the elements of an array into a string, using a specified delimiter.
//    - The `join` method is used to create a string by concatenating all the elements of an array, separated by a specified delimiter.
//    - It does not change the original array; it returns a string representing the array elements.
//    - Example:
     const array = ['apple', 'banana', 'orange'];
     const resultString = array.join(', '); // Join with comma and space
     console.log(resultString); // "apple, banana, orange"
     console.log(array);        // ['apple', 'banana', 'orange'] (unchanged)