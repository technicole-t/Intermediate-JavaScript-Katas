function getEvenNumbers(nums) {
  const evenNums = nums.filter (i => i % 2 === 0); 
  return evenNums;
}
  /*  This function takes an array of integers and 
      returns an array containing only even integers */

function flipBooleans(bools) {
  for (let i = 0; i < bools.length; i++) {
    bools[i] = !bools[i];
  }
  return bools;
}
  /*
      This function takes an array of booleans and should return 
      an array of the opposite booleans.
      E.g. [true, true, false] => [false, false, true]
    */

function findFirstDentist(people) {
  let foundADentist = people.find (name => name.isDentist)
  || null;
  return foundADentist;
}
  /*
    This function takes an array of people 
    objects and returns the first found dentist 
    object from the array.

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

  /* This function receives an array of people objects in for format:
      { name: 'Emmeline', lives: { country: 'UK', city: 'Manchester' }, age: 32 }
    The function should return the number of people who live in the city of Manchester
    */


function getPugOwners(dogs) {
  let pugOwners = [];
  for (let i = 0; i < dogs.length; i++) {
    if (dogs[i].breed == 'Pug'){
      pugOwners.push(dogs[i].owner)
    }
  }
  return pugOwners;
}
  /*
    This function takes an array of dog objects and returns an array of the names of all the pug owners.
    E.g. [
      {name: 'Beatrice', breed: 'Lurcher', owner: 'Tom'},
      {name: 'Max', breed: 'Pug', owner: 'Izzi'},
      {name: 'Poppy', breed: 'Pug', owner: 'Anat'}
    ]
    will return ['Izzi', 'Anat']
    */


function getWordLengths(str) {

  /*
  This function takes a string and returns an array of the lengths of each word in the string.
  E.g. 'pineapple and black bean curry' => [9, 3, 5, 4, 5]
  */
}

function getPalindromes(words) {
  /*
  This function takes an array of words and returns an array containing only the palindromes.
  A palindrome is a word that is spelled the same way backwards.
  E.g. ['foo', 'racecar', 'pineapple', 'porcupine', 'tacocat'] => ['racecar', 'tacocat']
  */
}

function replaceLettersWithXs(str) {
  /* This function will receive a string with a mix of characters. It should return the string with all letters replaced by dashes ('X').
    For example 'I love Greg' should return 'X XXXX XXXX', and 'Hard as 1, 2, 3' should return 'XXXX XX 1, 2, 3'.
    */
}

function validMobileNumber(num) {

  /*
  This function will receive the string of a mobile number. It should return true if the number is a valid UK number and false if not.
  A valid mobile number may begin with '07' followed by 9 more digits.
  It may also begin with '+447' followed by 9 more digits.
  It may also begin with '00447' followed by 9 more digits.
  Anything else is invalid.
  */

}

function sumDigitsFromString(str) {
  /*
  This function takes a string with a jumble of letters and numbers. It should add together all the numbers that appear in the string and return the total.
  E.g. 'foo5bar6cat1' => 12
  'foo99cat' => 18
  Tip: For this one, it might be useful to know that the value `NaN` in JavaScript behaves oddly. For example, if you do `typeof NaN` it tells you it's a `"number"`. Odd, eh?
  */
}

function getWilliams(arr) {
  /*
  This function takes an array of full names and returns an array containing only the people whose last name is Williams.
  E.g. ['Charlotte Jones', 'Rebecca Williams', 'Harry Williams', 'John Williamson', 'William Jones'] => ['Rebecca Williams', 'Harry Williams']
  */
}

function getFactorials(nums) {
  /*
  This function takes an array of positive integers and returns an array of the factorials of these numbers.
  E.g. [4, 3, 2] => [24, 6, 2]

  The factorial of a number is the product of that number and all the integers below it.
  E.g. the factorial of 4 is 4 * 3 * 2 * 1 = 24
  */
}

function largestNumber(num) {
  /*
  This function takes a number and returns the largest number that can be made with the same digits.
  E.g. if num is 23, the function should return 32.
  E.g. if num is 9, the function should return 9.
  E.g. if num is 581 the function should return 851.
  */
}

function generateMatrix(n) {

  /*
  This function takes a number, n, and returns an n*n nested array populated with the value null.
  E.g. if n is 3, we want:
  [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]
  */

}

function findWrongWayFruit(orchard) {

  /*
  This array takes an array of fruit in the format:
  ['apple', 'apple', 'apple', 'apple', 'elppa', 'apple']

  The fruit will all be the 'right way round' apart from 1 fruit!
  Your function should return its index position. E.g. in this example, 4.
  NB The fruit will not always be apple but it will always be an orchard of the same kind of fruit.
  */

}

function pairDNA(dna) {
  /*
  This function takes a string of DNA such as 'GTCA' and returns an array containing correctly matched DNA pairs.
  E.g. 'GTTC' => ['GC', 'TA', 'TA', 'CG']
  If any nonsensical letters are passed as DNA they should be ignored.
  E.g. 'GYTC' => ['GC', 'TA', 'CG']
  */
}

function tallyHashtagsAndMentions(str) {
  /* This function receives a string that will contain a number of mentions and hashtags as on Twitter.

    E.g. "So excited to start at @northcoders on Monday! #learntocode #codingbootcamp"

     The function should return an object describing the number of hashtags and mentions found:
     { hashtags: 2, mentions: 1 }
     */
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
