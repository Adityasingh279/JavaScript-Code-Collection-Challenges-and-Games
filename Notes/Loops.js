// Chapter 6: Loops

// for loops
const fruits = ["banana", "apple", "orange", "pears"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
//this is an obsolete loop method

// short new method for loops
const numbers=[1,2,3,4,5,6,7,8,9]
for(const number of numbers){
    console.log(number) //if you use numbers, it'll print the whole array 'number' times. so be careful
}

// letter calculator
const howManyLetters = () => {
    const Phrase = `Hey, can you go to grocery store with me?`
    for(letter in Phrase){
        console.log(letter)
    }
}
howManyLetters()

//or
//for getting actual letters, do this
for(const letter of Phrase)
//for getting index of each one of those
for(const letter in Phrase)

//sum of numbers in an array
const sumArray = (numbers) => {
  let result = 0;
  for (const number of numbers) {
    result = result + number;
  }
  return result;
};
const numb = [1, 2, 3, 4, 5, 6, 7];
res = sumArray(numb);
console.log(res);

//biggest number
const Max = (numbers) => {
    let result = numbers[0]
    for(const number of numbers){
    if(number>result){
        result=number
    }
}
return result
}
console.log(Max([1,2,3,4,5,6,7,20,5,7,975,348,2628,72,272372,983289]));

//letter frequency
const LetterFreq = (phrase) => {
  //it'll print the data in phrase
  console.log(phrase);
  let Frequency = {};

  for (const letter of phrase) {
       //print letters one by one in the phrase
  //   console.log(letter);

     //check if letter exist in frequency
    if (letter in Frequency) {
      //it'll increase it's value by one
      Frequency[letter] += 1;
    } else {
       //otherwise, set the value to 1
      Frequency[letter] = 1;
    }
  }

  return Frequency;
};
console.log(LetterFreq('Lol, what are you doing tonight?, I hope you are doing fine.'));

//Incremental Operators
// ++, --, +=

//word frequency in a sentence
const WordFrequency = (phrase) => {
  let Frequency = {};
  const words = phrase.split(" ");
  for (const word of words) {
    console.log(word);

    if (word in Frequency) {
      Frequency[word] = +1;
    } else {
      Frequency[word] = 1;
    }
  }
  return Frequency;
};
console.log(
  WordFrequency(
    "The curious cat chased a fluttering butterfly through the sunlit garden."
  )
);