// PASSED 
/*  This function takes an array of integers and 
      returns an array containing only even integers */
function getEvenNumbers(nums) {
  const evenNums = nums.filter (i => i % 2 === 0); 
  return evenNums;
}

// PASSED 
// This function takes an array of booleans and should return an array of the opposite booleans. E.g. [true, true, false] => [false, false, true]
function flipBooleans(bools) {
  for (let i = 0; i < bools.length; i++) {
    bools[i] = !bools[i];
  }
  return bools;
}

// PASSED
// This function takes an array of people objects and returns the first found dentist object from the array.
function findFirstDentist(people) {
  const foundADentist = people.find(names => names.isDentist)
  || null;
  return foundADentist;
}

// PASSED
/* This function receives an array of people objects in for format:
    { name: 'Emmeline', lives: { country: 'UK', city: 'Manchester' }, age: 32 }
    The function should return the number of people who live in the city of Manchester
    */
function tallyPeopleInManchester(people) { 
  let mancPeople = 0; 
    for (let i = 0; i < people.length; i++){
      if (people[i].lives.city == 'Manchester'){
        mancPeople ++;
      }
    }
    return mancPeople;
  }

// PASSED 
 /*
    This function takes an array of dog objects and returns an array of the names of all the pug owners.
    E.g. [
      {name: 'Beatrice', breed: 'Lurcher', owner: 'Tom'},
      {name: 'Max', breed: 'Pug', owner: 'Izzi'},
      {name: 'Poppy', breed: 'Pug', owner: 'Anat'}
    ]
    will return ['Izzi', 'Anat']
    */
function getPugOwners(dogs) {
  const pugOwners = [];
  for (let i = 0; i < dogs.length; i++) {
    if (dogs[i].breed == 'Pug'){
      pugOwners.push(dogs[i].owner)
    }
  }
  return pugOwners;
}

// PASSED
/*
  This function takes a string and returns an array of the lengths of each word in the string.
  E.g. 'pineapple and black bean curry' => [9, 3, 5, 4, 5]
  */
function getWordLengths(str) {

  const newWordsArray = str.split(' '); // splits a string into an array of substrings, and returns the new array
  console.log (newWordsArray);

  const newLengthArray = newWordsArray.map(newWordsArray => newWordsArray.length);
  console.log(newLengthArray);
  
  return newLengthArray == 0 ? [] : newLengthArray;
}

// PASSED 
 /*
  This function takes an array of words and returns an array containing only the palindromes.
  A palindrome is a word that is spelled the same way backwards.
  E.g. ['foo', 'racecar', 'pineapple', 'porcupine', 'tacocat'] => ['racecar', 'tacocat']
  */
function getPalindromes(words) {
  let re = /[\W_]/g;
  let lowRegStr;
  let reverseStr;
  let palidromeWords = [];
  let index = 0;
  for (var i=0; i<words.length; i++)
  {
      lowRegStr = words[i].toLowerCase().replace(re, '');
      reverseStr = lowRegStr.split('').reverse().join('');
      if (reverseStr === lowRegStr)
      {
          palidromeWords[index]=words[i];
          index=index+1;
      }
  }
return palidromeWords;
}


  // PASSED
   /* This function will receive a string with a mix of characters. It should return the string with all letters replaced by dashes ('X').
    For example 'I love Greg' should return 'X XXXX XXXX', and 'Hard as 1, 2, 3' should return 'XXXX XX 1, 2, 3'.
    */
function replaceLettersWithXs(str) {
  const replacedLetters = str.replace(/[a-z]/ig, 'X');
  console.log(replacedLetters);

  return replacedLetters;
}

// PASSED
 /*
  This function will receive the string of a mobile number. It should return true if the number is a valid UK number and false if not.
  A valid mobile number may begin with '07' followed by 9 more digits.
  It may also begin with '+447' followed by 9 more digits.
  It may also begin with '00447' followed by 9 more digits.
  Anything else is invalid.
  */
function validMobileNumber(num) {

  let validNumber = /((07)|((\+|00)447)){1}[0-9]{9}\b/;
  resultNumber = validNumber.test(num);

  return resultNumber;
}

// PASSED
/*
  This function takes a string with a jumble of letters and numbers. It should add together all the numbers that appear in the string and return the total.
  E.g. 'foo5bar6cat1' => 12
  'foo99cat' => 18
  Tip: For this one, it might be useful to know that the value `NaN` in JavaScript behaves oddly. 
  For example, if you do `typeof NaN` it tells you it's a `"number"`. Odd, eh?
  */
function sumDigitsFromString(str) {
  let addedNumbers = 0;
  const numbers = str.match(/\d+/g).map(Number);
  console.log(numbers);
    for (let i = 0; i < numbers.length; i++) {
      addedNumbers += numbers[i];
  console.log(addedNumbers);
  }
  return addedNumbers;
}


// PASSED 
 /*
  This function takes an array of full names and returns an array containing only the people whose last name is Williams.
  E.g. ['Charlotte Jones', 'Rebecca Williams', 'Harry Williams', 'John Williamson', 'William Jones'] => ['Rebecca Williams', 'Harry Williams']
  */
function getWilliams(arr) {
  let pplNamedWilliams = arr.filter(name => name.endsWith('Williams'))
  return pplNamedWilliams;
}

// PASSED 
 /*
  This function takes an array of positive integers and returns an array of the factorials of these numbers.
  E.g. [4, 3, 2] => [24, 6, 2]

  The factorial of a number is the product of that number and all the integers below it.
  E.g. the factorial of 4 is 4 * 3 * 2 * 1 = 24
  */

function getFactorials(nums) {
  let factorials =[];
    for (let index=0; index<nums.length;index++)
    {
        if (nums[index] === 0 || nums[index] === 1)
            { 
                factorials[index] = 1;
            }
        else
            {
                    let fact=nums[index];
                for (let i = fact- 1; i >= 1; i--) {
                    fact *= i;
                }
                factorials[index]=fact;
            }
    }
    return factorials;
}

var  nums = [4, 3, 2];
console.log(getFactorials(nums));

// ALSO PASSED TESTS 
 /* return numbers = Array.from(nums).map(function convertToFactorial (nums) {
    console.log(numbers);
    if (nums == 0 || nums == 1) return 1;
    else return nums * convertToFactorial(nums - 1);
  }); /* 



// PASSED 
/*
  This function takes a number and returns the largest number that can be made with the same digits.
  E.g. if num is 23, the function should return 32.
  E.g. if num is 9, the function should return 9.
  E.g. if num is 581 the function should return 851.
  */
function largestNumber(num) {
  num = String(num).split('').sort().reverse().join('');
  console.log(num);
  return Number(num);
}

// PASSED 
  /*
  This function takes a number, n, and returns an n*n nested array populated with the value null.
  E.g. if n is 3, we want:
  [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]
  */
function generateMatrix(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push([]);
    console.log(result);
    for (let a = 0; a < n; a++) { // 2nd loop 
      result[i].push(null); // push to value null
    }
  }
  return result;  
}

// PASSED 
  /*
  This array takes an array of fruit in the format:
  ['apple', 'apple', 'apple', 'apple', 'elppa', 'apple']

  The fruit will all be the 'right way round' apart from 1 fruit!
  Your function should return its index position. E.g. in this example, 4.
  NB The fruit will not always be apple but it will always be an orchard of the same kind of fruit.
  */
function findWrongWayFruit(orchard) {

  let rightWayRound = orchard[0] === orchard[1] ? orchard[0] : (orchard[0] == orchard[2] ? orchard[0] : orchard[2]);
  console.log(orchard);
  
  return orchard.findIndex(i=>i !== rightWayRound);
}


// NOT PASSED 
function pairDNA(dna) {
    // Return each strand as an array of two elements, the original and the pair.
    let paired = [];

    // Function to check with strand to pair.
    let search = function(char) {
        switch (char) {
            case "A":
                paired.push("AT");
                break;
            case "T":
                paired.push("TA");
                break;
            case "C":
                paired.push("CG");
                break;
            case "G":
                paired.push("GC");
                break;
        }
    };

    // Loops through the input and pair.
    for (let i = 0; i < dna.length; i++) {
        search(dna[i].toUpperCase());
    }

    return paired;
}
  /*
  This function takes a string of DNA such as 'GTCA' and returns an array containing correctly matched DNA pairs.
  E.g. 'GTTC' => ['GC', 'TA', 'TA', 'CG']
  If any nonsensical letters are passed as DNA they should be ignored.
  E.g. 'GYTC' => ['GC', 'TA', 'CG']
  */


// PASSED 
  /* This function receives a string that will contain a number of mentions and hashtags as on Twitter.

    E.g. "So excited to start at @northcoders on Monday! #learntocode #codingbootcamp"

     The function should return an object describing the number of hashtags and mentions found:
     { hashtags: 2, mentions: 1 }
     */
function tallyHashtagsAndMentions(str) {

  const tallyObject = {
    hashtags: (str.match(/#\w+/ig) || []).length,
    mentions: (str.match(/@\w+/ig) || []).length,

  }
  return tallyObject; 
}

// ---------- Do not change the code below this line --------------
module.exports = {
  getEvenNumbers,
  flipBooleans,
  findFirstDentist,
  tallyPeopleInManchester,
  getPugOwners,
  getWordLengths,
  getPalindromes,
  replaceLettersWithXs,
  validMobileNumber,
  sumDigitsFromString,
  getWilliams,
  getFactorials,
  largestNumber,
  generateMatrix,
  findWrongWayFruit,
  pairDNA,
  tallyHashtagsAndMentions,
};
