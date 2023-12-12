// Chapter 5: Objects

// Objects are a type of variables, quite similar to Arrays, but they have key-value pairs.
// {} - Curly brackets represent an object

// Example 1
const myObject = {
    key1: 'value 1',
    key2: 'value 2'
}

// Example 2
const Person = {
    name: 'shirt',
    shirt: 'white',
}

console.log(myObject.key1)
console.log(myObject.key2)
console.log(Person.name)
console.log(Person.shirt)

// Different ways to access objects
console.log(Person.shirt) // Dot notation
console.log(Person['shirt']) // Bracket notation

// Assigning properties to an object (Works like push in arrays)
// Example:
Person.phone = '1-222-333-4444'
console.log(Person)
// or
Person['phone'] = '1-222-333-4445'
console.log(Person)

// Objects consist of key (property) and value pairs
// Example:
const myDetails = {
    name: 'aditya', // 'aditya' is the value, and 'name' is the key or property
    shirt: 'grey',
}

console.log(myDetails.name) // Dot notation
console.log(myDetails['name']) // Bracket notation
console.log(myDetails.shirt) // Dot notation
console.log(myDetails['shirt']) // Bracket notation

// Example using ES6 with arrow function (4 arguments), objects, and template literals
const introducer = (name, shirt, assets, liabilities) => {
    const Person = {
        name: name,
        shirt: shirt,
        assets: assets,
        liabilities: liabilities,
    }

    const intro = `Hi, my name is ${Person.name} and the color of my shirt is ${Person.shirt}. My net worth is $${Person.assets - Person.liabilities} USD`
    return intro
}
console.log(introducer('adi', 'black', '100000', '50000'))

// Note: You can store functions inside an object
// Methods (inside an object): a method is a property containing a function definition
// Note: math.floor() => this is a method. math.floor => this is a property

// Example to show the difference between method and property as well as how to use a function inside an object
const introducerWithMethod = (name, shirt, assets, liabilities) => {
    const Person = {
        name: name,
        shirt: shirt,
        assets: assets,
        liabilities: liabilities,
        netWorth: function () { // Function inside an object
            return this.assets - this.liabilities
        }
    }

    const intro = `Hi, my name is ${name}, the color of my shirt is ${Person.shirt}, and my net worth is $${Person.netWorth()} USD` // Using method in net worth
    const introWithProperty = `Hi, my name is ${name}, the color of my shirt is ${Person.shirt}, and my net worth is $${Person.netWorth} USD` // Using property in net worth, it'll output the whole function.
    
    return [intro, introWithProperty]
}
console.log(introducerWithMethod('adi', 'black', '100000', '50000'))
