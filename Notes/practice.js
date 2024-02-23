// // // What is the difference between the var and let keywords in javascript?
// // function example(){
// // var a = 20;
// // let b = 30;
// // const p = "arrow";
// // let q = a + b;

// // console.log(q);
// // }
// // console.log(a)
// // console.log(b) //undefined

// // // practice = () => {
// // //   var a = b + q;
// // // };
// // // console.log(a);

// // // What are Exports & Imports?
// // //example of import
// // import { StyleSheet, Text, View } from "react-native";
// // import React from "react";

// // const practice = () => {
// //   return (
// //     <View>
// //       <Text>practice</Text>
// //     </View>
// //   );
// // };
// // //example of export
// // export default practice;

// // const styles = StyleSheet.create({});

// // // keywords in javascript?
// // // reserved words like var, let, const for variable declaration, if else in conditional declaration or do while
// // // or while for loops they have special meaning and we cannot use them apart from their actual usage

// // // Hoisting in javascript.
// // // when you use variable or call a function before it's been declared
// // console.log(u); //undefined
// // let u = 7;
// // console.log(u)

// // // call(), apply() and, bind() methods.

// function maxSumForArray(A) {
//   const n = A.length;

//   let dp = Array(n).fill(0);
//   dp[0] = A[0];
//   dp[1] = Math.max(A[0] + A[1], A[1]);

//   for (let i = 2; i < n; i++) {
//     dp[i] = Math.max(
//       Math.floor(dp[i - 1] / 2) + A[i],
//       dp[i - 2] + A[i],
//       A[i],
//       dp[i - 1] + 2
//     );
//   }

//   return Math.max(...dp);
// }

// // Test cases:
// // const input1 = [2, -6, 0];
// // console.log(maxSumForArray(input1)); // Expected Output: -1

// // const input2 = [3, -2, 0, 2];
// // console.log(maxSumForArray(input2)); // Expected Output: 5

// const input3 = [4, 6, 2, -10, -4];
// console.log(maxSumForArray(input3)); // Expected Output: 9

// let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toTimeString())
// console.log(myDate.toUTCString())
// console.log(myDate.getTimezoneOffset())

//array methods
// let myArray = [0, 1, 2, 3, 4, 5];
// myArray.push(6);
// myArray.push(7); //add to the last index of an array
// console.log(myArray);
// myArray.pop(); //remove the last index of an array
// console.log(myArray);
// myArray.unshift(9); //add 9 to the starting "0th" index of the array (has optimization issue)
// console.log(myArray);
// myArray.shift(); //removes the starting "0th" index of the array
// console.log(myArray);

// console.log(myArray.includes(9)) //checks if value exist in the array in boolean (true/false)
// console.log(myArray.indexOf(9)) //tell the index of the given array, if not then output -1, idk why
// console.log(myArray.indexOf(2))
// // console.log(myArray)

// const newarray = myArray.join() //bind and convert an array to string

// console.log(myArray)
// console.log(newarray)
// console.log(typeof(newarray)) //to know the type of variable data stored

// //slice vs splice
// let myn1 = myArray.slice(1, 5); //will slice the array from index 1st (not zero) to before 5 (upto 4th index )
// console.log(myArray)
// console.log("A", myn1);

// let myn2 = myArray.splice(1, 3); //slice from 1st to 3rd index only but also change the original array
// console.log("B", myn2);
// console.log("Original Array now after Splice", myArray); //check the output of original array for reference after Splice.

// const marvel_heroes = ["thor", "ironman", "captain marvel"];
// const dc_heroes = ["batman", "superman", "logan"];

//to join arrays

// // 1st method:
// marvel_heroes.push(dc_heroes) //but it treats the push value as a single element to add to the existing array
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]); //value of 3rd index element array on 1st index place

// // 2nd method:
// const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes);

// // 3rd method:
// const all_heroes = [...dc_heroes, ...marvel_heroes] //spread operator
// console.log(all_heroes);

// const anotherarray = [1,2,3,4, [5,6,7, [8,9],2,3,4],5,6,7]
// const name = "Aditya"

// const realanotherarray = anotherarray.flat(Infinity) //flat(Infinity), it means that the nested array should be flattened to the maximum possible depth
// console.log(anotherarray);
// console.log(realanotherarray); //flattened array to infinity depth

// console.log(Array.isArray(name)) //checks for an array. False coz name variable has string "Aditya" which is not an array
// console.log(Array.isArray("Aryan")) //no, coz it's not an array
// console.log(Array.from("Aryaa"))  //Array.from(), it treats each character in the string as an element and creates an array from those characters.
// console.log(Array.from({name:"Samia"})) //converting object to array results to [] blank brackets always
// console.log(Array.from(Object.values({name:"Samia"})))
// // However, when you pass an object like {name: "Samia"} to Array.from(), it does not iterate over the properties of the object by default.
// // Instead, it treats the object as a single item and creates an array with that object as the only element.
// // In the case of {name: "Samia"}, the resulting array will have a single element, which is the entire object.
// // This is why you see an array with empty brackets ([]) when you try to convert an object to an array using Array.from().

// let score1 = 100;
// let score2 = 200;
// let score3 = 300;
// console.log(Array.of(score1, score2, score3)); //Array.of() method in JavaScript creates a new array from the arguments passed to it.

// //Objects
// //to declare literal(multiple instances) and constructor(singleton)

// //object literals

// //Object.create
// const mySym = Symbol("key1");

// const jsUser = {
//   name: "Aditya", //the system will process the name (key) as "name"
//   fullName: "Aditya Singh", //this value can be accessed by jsUser.fullName, but "full Name value is only accessable by brackets method
//   age: 18,
//   location: "Faridabad",
//   email: "Aditya@gmail.com",
//   isLoggedIn: false,
//   lastLoginDays: ["Monday", "Saturday"],
//   [mySym]: "myKey1",
// };

// //to access the object value
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser.fullName); //but now it's accessable, why? coz it's fullname with no space
// console.log(jsUser[mySym]);

// //to change any object key value
// jsUser.email = "aditya.singh@gmail.com";

// //to not let any user be able to change the value of any object, you can freeze it
// Object.freeze(jsUser);
// console.log(jsUser);

// jsUser.greeting = function () {
//   console.log("hello js user");
// };
// jsUser.greetingTwo = function () {
//   console.log(`hello js user, ${this.name}`); //string interpolation done by using back ticks ``
// };

// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());
// console.log(jsUser)

//object constructor(singleton)
//declaration
// const tinderUser = new Object() //singleton object
// const tinderUser = {} //non-singleton object

// tinderUser.id: "123abc"
// tinderUser.name: "Sammy"
// tinderUser.isLoggedIn: false

// console.log(tinderUser);

// const regularUser = {
//   email: "someone@gmail.com",
//   fullname: {
//     userfullname: {
//       firstname: "aditya",
//       lastname: "chaudhary",
//     },
//   },
// };
//console.log(regularUser.fullname.userfullname.firstname);
//here we can use ? as an if else condition like if we're using these object to access the
// api data so in that case if we dont get the value then it can check the if else condition and respond accordingly like in the example

// if (regularUser?.userfullname?.firstname) {
//     console.log(regularUser.userfullname.firstname);
// } else {
//     console.log("Firstname not available");
// }

// const obj1 = { 1: "a", 2: "b" };
// const obj2 = { 3: "c", 4: "d" };

// // const obj3 = {obj1, obj2}
// // const obj3 = Object.assign({}, obj1, obj2); //object.assing(target, source) target is where the source files will get store
// const obj3 = {...obj1, ...obj2} //combining by using spread operator
// console.log(obj3);

// const users = [
//     {
//         id: 1,
//         email: "user@gmail.com",
//     },
//     {
//         id: 1,
//         email: "user@gmail.com",
//     },
//     {
//         id: 1,
//         email: "user@gmail.com",
//     },
//     {
//         id: 1,
//         email: "user@gmail.com",
//     }
// ]

// users[1].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser)) // it'll give an array of the keys inside an object
// console.log(Object.values(tinderUser)) // it'll give an array of the values inside an object
// console.log(Object.entries(tinderUser)) // it'll give an array of the keys & values inside an object

// console.log(tinderUser.hasOwnProperty('isLoggedIn')) // it'll tell if the object has that property or not in boolean

// //Object destructure
// const course = {
//     coursename: "js in hindi",
//     price : "999",
//     courseonstructor: "hitest",
// }

// // course.courseonstructor

// const {courseonstructor : instructor} = course //easy destructuring for not typing long names just like we use in props for react
// // console.log(courseonstructor);
// console.log(instructor);

// // Ex:
// // const navbar = (props.company) => {}  ====>> const navbar = ({company}) => {}

// //xml old times now json

// Functions

// function sayMyName() {
//     console.log("A")
//     console.log("D")
//     console.log("I")
// }

// sayMyName()

// function addTwoNumber(number1,number2) {  //they're called parameters
//     console.log(number1+number2);
// }

// addTwoNumber(3,4) //value pass = arguments
// addTwoNumber(3,"4")
// addTwoNumber(3,"a")
// addTwoNumber(3,null)

//answer will print out of scope of the block only if you return the result and no code in the function will get executed after return

// function loginUserMessage(username) {
//   return `${username} just logged in`;
// }

// console.log(loginUserMessage("Aditya"));
// // console.log(loginUserMessage(""));
// // console.log(loginUserMessage());

// function loginUserMessage(username) {
//     if(!username){
//         return console.log("Please enter a username")
//     }
//     return `${username} just logged in`;
//   }

// //cart

// function calculateCartPrice(val1,val2,...num1){  //this is called rest operator here
//     return num1
// }
// console.log(calculateCartPrice(200,400,600,2000)) //initial 200 & 400 got stored in val1 and val2

// const user = {  //this is object
//     username: "Aditya",
//     price: "399",
// }

// function handleObject(anyObject){  //this is a function handling any object value
//     console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
// }

//     // handleObject(user)
//     //or we can pass direct object
//     handleObject({
//         username: 'sam',
//         price: 399
//     })

//     const myNewArray = [200,400,600,800,2000] //this is array

//     function returnSecondValue(getArray){ //this is a function handling any array value and return second value
//         return getArray[1]
//     }

//     // console.log(returnSecondValue(myNewArray))
//      //or we can pass direct array
//     console.log(returnSecondValue([200,500,600]))

// //scope
// // let a=10;
// // const b=20;
// // var c=30;

// if(true){
//     let a=10;
// const b=20;
// var c=30; //it's value got printed out of the scope
//     // console.log(a);
// }

// // console.log(a);
// // console.log(b);
// console.log(c);

// function one(){
//     const userName= "Aditya"

//     function two(){
//         const website="YouTube"
//         console.log(userName);

//     }
//     // console.log(website) //child function can use parent
//     //variable but not viceversa. This is a concept in JavaScript
//     //called "lexical scoping" or "closure".
//     two()
// }
// one()

// //two methods of making functions
// console.log(addone(2))
// function addone(num){
//     return num+1
// }

// //js variable are strong, they can hold any value
// //here we're holding the function in a variable after declaration

// // The function addTwo is assigned using a function expression
// // (specifically, a variable declaration with a function expression).
// // Unlike function declarations, function expressions are not hoisted
// // in the same way.

// console.log(addTwo(5))
// const addTwo = function(num){
//     return num+5
// }

// const user = {
//     username: "Aditya",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username}, welcome to Website`);
//         console.log(this)
//     }
// }
// // user.welcomeMessage()
// // user.username = "Sam"
// // user.welcomeMessage()
// console.log(this)

// function chai(){
//     let usernmae = "aditya"
//     console.log(usernmae)
//     console.log(this.usernmae) //it only works with object not function
// }
// chai()

// const chai = function(){
//     let usernmae = "aditya"
//     console.log(usernmae)
//     console.log(this.usernmae) //it only works with object not function
// }
// chai()

// //arrow function
// const addtwo = (num1, num2) =>{ //explicit return {{using this}}
//     return num1+num2
// }
// console.log(addtwo(3,7))

// const addtwo = (num1, num2) => num1+num2 //implicit return
// console.log(addtwo(3,7))

// //Immediately invoked function expression (IIFE)
// (function chai(){
//     console.log("first");
// })();

// ((name) => {
//     console.log(`first, ${name}`);
// })("lola")

//if

// if(condition == true) {
//     //then it'll be executed
// }//otherwise this will not be executed

// const isUserLoggedIn = true
// if(isUserLoggedIn){
//     console.log("User is logged in")
// }
// else{
//     //or this
// }
// console.log("Execute")
// //conditions like
// // //<,>,<=,>=,==,!=,===,!==

// const score = 200
// if(score > 100){
//     const power = "fly"
//     console.log(`User Power:${power}`)
// }
// // console.log(`User Power:${power}`) //scope, it'll not be excuted unless power varibale is declared in var

// const balance = 1000
// // if (balance > 500) console.log("test"), console.log("test 2"); //not a good practive (implicit scope)

// if (balance < 500) {
//     console.log("Less than 500")
// } else if(balance < 750) {
//     console.log("Balance is less than 750")
// }
// else if(balance < 900) {
//     console.log("Balance is less than 900")
// }
// else{
//     console.log("PArayapt balance")
// }

// //checking multiple conditions

// const userLoggedIn = true;
// const debitCard = false;
// const creditCard = false;
// const loggedInFromGoogle = false;
// const loggedInFromEmail = false;

// if (userLoggedIn && (debitCard || creditCard)) { //checks if user logged in and have a credit or debit card then only we'll welcome the user
//   console.log("Welcome");
// } else if (loggedInFromEmail || loggedInFromGoogle) { //check if the user logged in from email or google
//   console.log("Noice");
// } else { //warna user ki mkc
//   console.log("Pehli fursat mai nikal");
// }

//switch case

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

// const month = "April"

// switch (month) {
//     case "jan":
//         console.log("January")
//         break;
//     case "Feb":
//         console.log("February")
//         break;
//     case "March":
//         console.log("March")
//         break;
//     case "April":
//         console.log("April")
//         break;
//     case "May":
//         console.log("May")
//         break;
//     case "June":
//         console.log("June")
//         break;
//     case "July":
//         console.log("July")
//         break;

//     default:
//         console.log("Not found")
//         break;
// }

// //truthy & falsy
// const userEmail = "Aditya@gmail.com"

// if (userEmail) { //truthy
//     console.log("Got user email");
// }
// else {
//     console.log("Don't have user email");
// }

// //falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN
// //others are truthy values
// //suprising truthy values
// "0", 'falsey', " ", [], {}, function(){},

// //To check if array or object is empty or not
// userEmail = []
// if(userEmail.length === 0) {
//     console.log("Array is Empty")
// }

// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty")
// }

// //Nullish Coalescing Operator (??): null undefined

// let val1;
// //val1 = 5 ?? 10 //5 will be assigned to val1
// val1 = null ?? 10; //but if by any chance one value is undefined or doesn't exist then other will be assigned to it
// val1 = undefined ?? 15;
// val1 = null ?? 20 ?? 30;

// console.log(val1);

// //Ternary operator
// // condition ? true : false;

// const iceTeaPrice = 100;
// iceTeaPrice >= 80 ? console.log("Less than 80") : console.log("More than 80");

//Iteration (loops)

//for loop syntax

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     if(element == 5){
//         console.log("5 is the best number")
//     }
//     console.log(element)

// }

// //Nested loop
// for (let i = 10; i < 20; i++) {
//     console.log(`Outer loop value ${i}`)
//     for (let j = 0; j < 10; j++) {
//         console.log(`Inner loop value ${j} and outer loop value ${i}`)

//     }

// }

//break & continue

// for (let i = 0; i < 5; i++) {
//     if(i == 3){
//     console.log(`Special Number found: ${i}`);
//     break;
//     }
//   console.log(`The Value is: ${i}`); //it did'nt print the value and break the loop cycle all together

// }

// for (let i = 0; i < 5; i++) {
//     if(i == 3){
//     console.log(`Special Number found: ${i}`);
//     continue;
//     }
//   console.log(`The Value is: ${i}`); //it did'nt print the value and break the desired cycle but continue the loop further

// }
//break: When encountered within a loop, it immediately terminates the loop and continues with the code that follows it.
//continue: When encountered within a loop, it skips the rest of the code inside the loop for the current iteration and moves on to the next iteration.

// //while and do-while loop

// // let lolu = 10;
// // while (lolu <= 10) {
// //   console.log("HaNg OvEr");
// //   lolu++
// // }

// let myArray = ["spiderman", "batman", "superman"];
// let arr = 0;
// while (arr < myArray.length) {
//     console.log(`Super heroes: ${myArray[arr]}`);
//     arr++
// }

// let score = 11
// do {
//     console.log(`The number is ${score}`)
// } while (score <=10);

//forof loop

//syntax
// for (const iterator of object) {}

// arrr = [1, 2, 3, 4, 5, 6, 9];
// for (const i of arrr) {
//     console.log(i)
// }

// name = "HellO World!";
// for (const iterator of name) {
//   if (iterator == " ") break;
//   else {
//     console.log(iterator); //output: hello
//   }
// }

// for (const iterator of name) {
//   if (iterator == " ") continue;
//   else {
//     console.log(iterator); //output: hello world!
//   }
// }

//map
// const map = new Map();
// map.set("IN", "India");
// map.set("Fr", "France");
// map.set("USA", "United States of America");
// map.set("IN", "India");

// console.log(map)

// for (const iterator of map) {
//     console.log(iterator)
// }

// for (const [key, value] of map) { //destructure of array
//   console.log(key, ":-", value);
// }

// const myObject ={
//     "Game1" : "NFS",
//     "Game2" : "Spiderman",
// }
// for (const [key,value] of myObject) { //object is not iterable like this unlike maps
//     console.log(key,value)
// }

// const myObject ={
//     "Game1" : "NFS",
//     "Game2" : "Spiderman",
// }
// for (const key in myObject) { //object iteration
//     console.log(`${key} is ${myObject[key]}`)
// }

// const languages = ["js", "cpp", "ruby", "swift"]
// for (const key in languages) {
//    console.log(key) //number of array
//    console.log(languages[key]) //value or element of array
// }

//foreach() loop
// coding = ["js","python","ruby",]
// coding.forEach( function(val) {
//     console.log(val)
// });

// coding.forEach( (item) => {
//     console.log(item)
// })

// coding = [
//     {
//         language : "JavaScript",
//     shortform: "js"
//     },
//     {
//         language : "Python",
//     shortform: "py"
//     },
//     {
//         language : "C++",
//     shortform: "cpp"
//     },

// ]

// coding.forEach((item) => { //it's also used to iterate value of an array consist of object (key and value pair)
//     console.log(item.language);
//     console.log(item.shortform);
// })

//filter

// myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// filteredNums = myNums.filter((title) => title > 4); //implicit
// console.log(filteredNums);

// filteredNums = myNums.filter((title) => { //explicit
//   return title > 4;
// });
// console.log(filteredNums);

//now by using forEach()
// lolu = []
// myNums.forEach((element) => {
//   if (element > 4) {
//     lolu.push(element);
//   }
// });
// console.log(lolu);

//map

// myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const popu = myNums.map((title) => {
//   return title + 10;
// });
// console.log(popu);

//chaining 
// const num = myNums
// .map((element) => {
//     return element + 10
// })
// .map((element) => {
//     return element*10
// })
// .filter((element) => {
//     return element >= 140
// })

// console.log(num)

//reduce

// num = [1,2,3]

// const myTotal = num.reduce( function(acc, currval) {
//     return acc += currval
// },0)
// console.log(myTotal)

// const myTotal = num.reduce( (acc, currval) => (acc + currval),0)
// console.log(myTotal)