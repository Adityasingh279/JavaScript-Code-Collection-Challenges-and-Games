// Chapter 7: Array Methods

// Map(), Filter(), Reduce()
// These are Higher Order Functions



//.Map() => loops and return an array
const num = [1, 2, 3, 4, 5, 6];
num.map((num) => console.log(num));

//for using full function or multiple lines
const num1 = [1, 2, 3, 4, 5, 6];
num.map((num1) => {
  console.log(num1);
  console.log("first");
  //...
});

//Multiplying Array by 2
let result = [1, 2, 3, 4, 5, 6, 7].map((number) => number * 2);
console.log(result);

//comparison of double number code (simple and by using map)
//Normal method
const numbers = [12, 14, 16, 18, 20];
let double = (numbers) => {
  let result = [];
  for (const number of numbers) {
    result.push(number * 2);
  }
  return result;
};
console.log(double(numbers));

//.map() method
const numberss = [12, 14, 16, 18, 20];
let doubleMap = (numberss) => {
  return numberss.map((numberss) => numberss * 2);
};
console.log(doubleMap(numberss));



//.Filter() => loops and return an array with matching condition
//manual(natural) filter
const Filter = (numbers, greaterThan) => {
  let result = [];
  for (const number of numbers) {
    if (number > greaterThan) {
      result.push(number);
    }
  }
  return result;
};
console.log(Filter([1, 2, 3, 4, 5, 6, 7], 3));

//by using filter
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(nums.filter((nums) => nums >= 3));

//or
const actors=[
    {name: 'johnny', networth: 2000000},
    {name: 'Brad pitt', networth: 5000000},
    {name: 'Leonardo DiCaprio', networth: 10000000},
    {name: 'Amber Heard', networth: 10},
];
console.log(actors.filter(actor=>actor.networth>10));

//using ecma5.0 (old one)
console.log(actors.filter(function(actor) {
    return actor.networth > 10;
}));



//.Reduce() => reduce takes in a function as an argumnent.
//=> reduce loops and gives you back the accumulator.
const numbs=[1,2,3,4];
const resultReduce = nums.reduce((a,b)=(a+b))
//Or any functionality inside the reduce bracket
console.log(resultReduce)

