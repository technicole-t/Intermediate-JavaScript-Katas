/* eslint no-undef: 0 */
/* eslint no-unused-expressions: 0 */
const { expect } = require('chai');
const {
  getEvenNums,
  invertBools,
  findFirstAstronaut,
  countPeopleInValencia,
  getPugNames,
  getWordLengths,
  findPalindromes,
  replaceLettersWithDashes,
  validMobileNumber,
  sumDigitsFromString,
  getSmiths,
  getFactorials,
  largestNumber,
  generateMatrix,
  findWrongWayAnimal,
  getDNAPairs,
  countHashtagsAndMentions,
} = require('../challenges');

describe('getEvenNums', () => {
  it('returns [] when passed []', () => {
    expect(getEvenNums([])).to.eql([]);
  });
  it('returns [2, 4, 6] when passed [1, 2, 3, 4, 5, 6]', () => {
    expect(getEvenNums([1, 2, 3, 4, 5, 6])).to.eql([2, 4, 6]);
  });
  it('returns [] when passed [1, 3, 5, 7, 99]', () => {
    expect(getEvenNums([1, 3, 5, 7, 99])).to.eql([]);
  });
  it('returns [2, 2, 2, 2] when passed [1, 2, 2, 5, 2, 87, 2]', () => {
    expect(getEvenNums([1, 2, 2, 5, 2, 87, 2])).to.eql([2, 2, 2, 2]);
  });
  it('returns [4, 4, 4] when passed [4, 4, 4]', () => {
    expect(getEvenNums([4, 4, 4])).to.eql([4, 4, 4]);
  });
  it('returns [88, 62, 10] when passed [1, 3, 88, 99, 62, 10]', () => {
    expect(getEvenNums([1, 3, 88, 99, 62, 10])).to.eql([88, 62, 10]);
  });
});

describe('invertBools', () => {
  it('it returns an empty array when passed []', () => {
    expect(invertBools([])).to.eql([]);
  });
  it('returns [false, false, false] when passed [true, true, true]', () => {
    expect(invertBools([true, true, true])).to.eql([false, false, false]);
  });
  it('returns [true, false, false] when passed [false, true, true]', () => {
    expect(invertBools([false, true, true])).to.eql([true, false, false]);
  });
  it('returns [true, true, true] when passed [false, false, false]', () => {
    expect(invertBools([false, false, false])).to.eql([true, true, true]);
  });
  it('returns [true, false, true] when passed [false, true, false]', () => {
    expect(invertBools([false, true, false])).to.eql([true, false, true]);
  });
});

describe('findFirstAstronaut', () => {
  it('returns null if no Astronaut is in the array', () => {
    expect(findFirstAstronaut([])).to.be.null;
  });

  it('returns a person object who is an astronaut', () => {
    const astronaut = { name: 'Tim Peake', isAstronaut: true };
    expect(findFirstAstronaut([astronaut])).to.have.keys(['name', 'isAstronaut']);
    expect(findFirstAstronaut([astronaut]).isAstronaut).to.be.true;
  });

  it('returns the first astronaut from the array', () => {
    const astronauts = [
      { name: 'Johnny Karate', isAstronaut: false },
      { name: 'Neil Armstrong', isAstronaut: true },
      { name: 'Valentina Tereshkova', isAstronaut: true },
      { name: 'Bert Macklin', isAstronaut: false },
      { name: 'Eileen Collins', isAstronaut: true },
      { name: 'Kip Hackman', isAstronaut: false },
    ];
    expect(findFirstAstronaut(astronauts)).to.eql({ name: 'Neil Armstrong', isAstronaut: true });
  });
});

describe('countPeopleInValencia', () => {
  it('returns 0 when nobody is from Valencia', () => {
    expect(countPeopleInValencia([
      { name: 'Sandra', lives: { country: 'UK', city: 'Manchester' }, age: 32 },
      { name: 'Sandrella', lives: { country: 'Spain', city: 'Bilbao' }, age: 32.5 },
    ])).to.eql(0);
  });
  it('returns the length of the array when everyone is from Valencia', () => {
    expect(countPeopleInValencia([
      { name: 'Cassandra', lives: { country: 'Spain', city: 'Valencia' }, age: 32.5 },
      { name: 'Cassandrella', lives: { country: 'Spain', city: 'Valencia' }, age: 35.55 },
    ])).to.eql(2);
  });
  it('returns the number of people who are actually from the fair city of Valencia', () => {
    expect(countPeopleInValencia([
      { name: 'Melissandra', lives: { country: 'Spain', city: 'Valencia' }, age: 55.5 },
      { name: 'Melissandrella', lives: { country: 'Spain', city: 'Valencia' }, age: 55.555 },
      { name: 'Keith', lives: { country: 'UK', city: 'Newport Pagnell' }, age: 2 },
    ])).to.eql(2);
    expect(countPeopleInValencia([
      { name: 'Imeldarina', lives: { country: 'Spain', city: 'Valencia' }, age: 15.2 },
      { name: 'Bob', lives: { country: 'Wales', city: 'Abertillery' }, age: 555555555555.555 },
      { name: 'Terry', lives: { country: 'England', city: 'Newport Pagnell' }, age: 0.00000002 },
    ])).to.eql(1);
  });
});

describe('getPugNames', () => {
  it('returns [] when passed []', () => {
    expect(getPugNames([])).to.eql([]);
  });
  it('returns an array of pug names when passed an array of dog objects', () => {
    const dogs = [
      { name: 'Beatrice', breed: 'Lurcher' },
      { name: 'Max', breed: 'Pug' },
      { name: 'Poppy', breed: 'Pug' },
    ];
    expect(getPugNames(dogs)).to.eql(['Max', 'Poppy']);
    const dogs2 = [
      { name: 'Steven', breed: 'Lurcher' },
      { name: 'Daphne', breed: 'Pug' },
      { name: 'Sandy', breed: 'Labrador' },
      { name: 'Mike', breed: 'Pug' },
      { name: 'Spike', breed: 'Pug' },
    ];
    expect(getPugNames(dogs2)).to.eql(['Daphne', 'Mike', 'Spike']);
    const dogs3 = [
      { name: 'Kevin', breed: 'Labrador' },
      { name: 'Patch', breed: 'Rottweiler' },
      { name: 'Miles', breed: 'Lurcher' },
      { name: 'Sandy', breed: 'Pug' },
      { name: 'Spot', breed: 'Pug' },
      { name: 'Josephine', breed: 'Terrier' },
      { name: 'Eric', breed: 'Pug' },
    ];
    expect(getPugNames(dogs3)).to.eql(['Sandy', 'Spot', 'Eric']);
  });
});

describe('getWordLengths', () => {
  it('returns [] when passed ""', () => {
    expect(getWordLengths('')).to.eql([]);
  });
  it('returns [5, 5] when passed "hello world"', () => {
    expect(getWordLengths('hello world')).to.eql([5, 5]);
  });
  it('returns [4, 1, 6, 4, 8, 5] when passed "like a bridge over troubled water"', () => {
    expect(getWordLengths('like a bridge over troubled water')).to.eql([4, 1, 6, 4, 8, 5]);
  });
  it('returns [6, 2, 5, 3] when passed "coding is great fun"', () => {
    expect(getWordLengths('coding is great fun')).to.eql([6, 2, 5, 3]);
  });
  it('returns [9, 3, 5, 4, 5] when passed "pineapple and black bean curry"', () => {
    expect(getWordLengths('pineapple and black bean curry')).to.eql([9, 3, 5, 4, 5]);
  });
  it('returns [5] when passed "woooo"', () => {
    expect(getWordLengths('woooo')).to.eql([5]);
  });
});

describe('findPalindromes', () => {
  it('returns [] when passed []', () => {
    expect(findPalindromes([])).to.eql([]);
  });
  it('returns ["racecar"] when passed ["racecar"]', () => {
    expect(findPalindromes(['racecar'])).to.eql(['racecar']);
  });
  it('returns ["racecar"] when passed ["pineapple", "racecar", "pony"]', () => {
    expect(findPalindromes(['pineapple', 'racecar', 'pony'])).to.eql(['racecar']);
  });
  it('returns [] when passed ["pineapple", "watermelon", "pony"]', () => {
    expect(findPalindromes(['pineapple', 'watermelon', 'pony'])).to.eql([]);
  });
  it('returns ["foof", "racecar"] when passed ["foof", "watermelon", "racecar", "gremlin"]', () => {
    expect(findPalindromes(['foof', 'watermelon', 'racecar', 'gremlin'])).to.eql(['foof', 'racecar']);
  });
});

describe('replaceLettersWithDashes', () => {
  it('replaces a single letter with a dash', () => {
    expect(replaceLettersWithDashes('Z')).to.equal('-');
  });
  it('does not replace a non-letter character', () => {
    expect(replaceLettersWithDashes('~')).to.equal('~');
    expect(replaceLettersWithDashes('-')).to.equal('-');
  });
  it('replaces sentences with dashes as appropriate', () => {
    expect(replaceLettersWithDashes('I like Alan')).to.equal('- ---- ----');
    expect(replaceLettersWithDashes('Don\'t you?')).to.equal('---\'- ---?');
  });
});

describe('validMobileNumber', () => {
  it('returns false when passed a string of the wrong length', () => {
    expect(validMobileNumber('123')).to.equal(false);
    expect(validMobileNumber('0750617250638')).to.equal(false);
    expect(validMobileNumber('+447712368768724988')).to.equal(false);
  });
  it('returns true when passed a string of "07506172506"', () => {
    expect(validMobileNumber('07506172506')).to.equal(true);
  });
  it('returns true when passed a string of "+447506172506"', () => {
    expect(validMobileNumber('+447506172506')).to.equal(true);
  });
  it('returns true when passed a string of "00447506172506"', () => {
    expect(validMobileNumber('00447506172506')).to.equal(true);
  });
  it('returns false when passed a string of "07506189foo"', () => {
    expect(validMobileNumber('07506189foo')).to.equal(false);
  });
  it('returns false when passed a string of "00447506189foo"', () => {
    expect(validMobileNumber('00447506189foo')).to.equal(false);
  });
  it('returns false when passed a string of "+447506189foo"', () => {
    expect(validMobileNumber('+447506189foo')).to.equal(false);
  });
  it('returns true when passed random other valid phone numbers', () => {
    expect(validMobileNumber('00447555123456')).to.equal(true);
    expect(validMobileNumber('+447676111222')).to.equal(true);
    expect(validMobileNumber('07898888643')).to.equal(true);
    expect(validMobileNumber('07766555432')).to.equal(true);
    expect(validMobileNumber('07989765490')).to.equal(true);
  });
  it('returns false when passed random other invalid phone numbers', () => {
    expect(validMobileNumber('004475551&&&23456')).to.equal(false);
    expect(validMobileNumber('-447676111222')).to.equal(false);
    expect(validMobileNumber('09898888643')).to.equal(false);
    expect(validMobileNumber('+449166555432')).to.equal(false);
    expect(validMobileNumber('00448989765493')).to.equal(false);
    expect(validMobileNumber('cats')).to.equal(false);
  });
});

describe('sumDigitsFromString', () => {
  it('returns 5 when passed "foo5foo"', () => {
    expect(sumDigitsFromString('foo5foo')).to.equal(5);
  });
  it('returns 10 when passed "5foo5foo"', () => {
    expect(sumDigitsFromString('5foo5foo')).to.equal(10);
  });
  it('returns 13 when passed "hello1world5this3is2a2string"', () => {
    expect(sumDigitsFromString('hello1world5this3is2a2string')).to.equal(13);
  });
  it('returns 18 when passed "foo99cat"', () => {
    expect(sumDigitsFromString('foo99cat')).to.equal(18);
  });
  it('returns 36 when passed "pineapples89are7246great"', () => {
    expect(sumDigitsFromString('pineapples89are7246great')).to.equal(36);
  });
});

describe('getSmiths', () => {
  it('returns [] when passed []', () => {
    expect(getSmiths([])).to.eql([]);
  });
  it('returns ["Harry Smith"] when passed ["Harry Smith", "Charlotte Banks"]', () => {
    expect(getSmiths(['Harry Smith', 'Charlotte Bank'])).to.eql(['Harry Smith']);
  });
  it('returns ["Harry Smith", "Jill Smith"] when passed ["Harry Smith", "Charlotte Banks", "Jill Smith", "Fred Bratnikov"]', () => {
    expect(getSmiths(['Harry Smith', 'Charlotte Bank'])).to.eql(['Harry Smith']);
  });
  it('returns ["Harry Smith"] when passed ["Smithy Jones", "Harry Smith"]', () => {
    expect(getSmiths(['Smithy Jones', 'Harry Smith'])).to.eql(['Harry Smith']);
  });
  it('returns ["John Smith"] when passed ["John Smith", "Chris Smithy"]', () => {
    expect(getSmiths(['John Smith', 'Chris Smithy'])).to.eql(['John Smith']);
  });
  it('returns ["Penelope Smith"] when passed ["Penelope Smith", "Charlotte Smither"]', () => {
    expect(getSmiths(['Penelope Smith', 'Charlotte Smither'])).to.eql(['Penelope Smith']);
  });
});

describe('getFactorials', () => {
  it('returns [] when passed []', () => {
    expect(getFactorials([])).to.eql([]);
  });
  it('returns [6] when passed [3]', () => {
    expect(getFactorials([3])).to.eql([6]);
  });
  it('returns [6, 24, 120] when passed [3]', () => {
    expect(getFactorials([3, 4, 5])).to.eql([6, 24, 120]);
  });
  it('returns [6, 40320, 362880, 3628800] when passed [3, 8, 9, 10]', () => {
    expect(getFactorials([3, 8, 9, 10])).to.eql([6, 40320, 362880, 3628800]);
  });
  it('returns [1, 2, 24, 120, 120] when passed [1, 2, 4, 5, 5]', () => {
    expect(getFactorials([1, 2, 4, 5, 5])).to.eql([1, 2, 24, 120, 120]);
  });
});

describe('largestNumber', () => {
  it('if passed a single-digit number then returns that number', () => {
    expect(largestNumber(9)).to.equal(9);
    expect(largestNumber(0)).to.equal(0);
    expect(largestNumber(1)).to.equal(1);
  });
  it('if passed a 2-digit number then does nothing if they are in descending order', () => {
    expect(largestNumber(43)).to.equal(43);
    expect(largestNumber(81)).to.equal(81);
    expect(largestNumber(21)).to.equal(21);
    expect(largestNumber(20)).to.equal(20);
  });
  it('if passed a 2-digit number then swaps the numbers if they are are in ascending order', () => {
    expect(largestNumber(19)).to.equal(91);
    expect(largestNumber(23)).to.equal(32);
    expect(largestNumber(35)).to.equal(53);
  });
  it('if passed a 3-digit number then returns the correctly ordered number', () => {
    expect(largestNumber(473)).to.equal(743);
    expect(largestNumber(850)).to.equal(850);
    expect(largestNumber(801)).to.equal(810);
    expect(largestNumber(100)).to.equal(100);
    expect(largestNumber(219)).to.equal(921);
    expect(largestNumber(581)).to.equal(851);
  });
  it('returns correctly ordered number for large numbers including those with many trailiing zeros', () => {
    expect(largestNumber(12345)).to.equal(54321);
    expect(largestNumber(12345000)).to.equal(54321000);
    expect(largestNumber(1010100)).to.equal(1110000);
    expect(largestNumber(89382291)).to.equal(99883221);
    expect(largestNumber(8001009100)).to.equal(9811000000);
  });
});

describe('generateMatrix', () => {
  it('returns [[null]] when passed 1', () => {
    expect(generateMatrix(1)).to.eql([[null]]);
  });
  it('returns a 2*2 matrix of null entries when passed 2', () => {
    expect(generateMatrix(2)).to.eql([[null, null], [null, null]]);
  });
  it('returns a 3*3 matrix of null entries when passed 3', () => {
    expect(generateMatrix(3)).to.eql([[null, null, null], [null, null, null], [null, null, null]]);
  });
});

describe('findWrongAnimal', () => {
  it('it returns 0 when passed an array length smaller than 3', () => {
    expect(findWrongWayAnimal(['sheep'])).to.equal(0);
    expect(findWrongWayAnimal(['peehs', 'sheep'])).to.equal(0);
  });
  it('it returns the correct index when the wrong-way animal is in the middle of the array', () => {
    expect(findWrongWayAnimal(['sheep', 'sheep', 'sheep', 'sheep', 'peehs', 'sheep'])).to.equal(4);
  });
  it('it returns the correct index when the wrong-way animal is at start', () => {
    expect(findWrongWayAnimal(['peehs', 'sheep', 'sheep', 'sheep', 'sheep', 'sheep'])).to.equal(0);
  });
  it('it returns the correct index when the wrong-way animal is at the end', () => {
    expect(findWrongWayAnimal(['sheep', 'sheep', 'sheep', 'sheep', 'sheep', 'peehs'])).to.equal(5);
  });
  it('it returns the correct index when the wrong-way animal is at any other random position', () => {
    expect(findWrongWayAnimal(['cat', 'cat', 'cat', 'cat', 'cat', 'tac'])).to.equal(5);
    expect(findWrongWayAnimal(['pigeon', 'noegip', 'pigeon', 'pigeon', 'pigeon', 'pigeon'])).to.equal(1);
    expect(findWrongWayAnimal(['tab', 'bat', 'bat', 'bat', 'bat', 'bat'])).to.equal(0);
    expect(findWrongWayAnimal(['gorilla', 'gorilla', 'gorilla', 'gorilla', 'allirog', 'gorilla'])).to.equal(4);
    expect(findWrongWayAnimal(['snail', 'snail', 'lians', 'snail', 'snail', 'snail'])).to.equal(2);
  });
});

describe('getDNAPairs', () => {
  it('returns [] when passed ""', () => {
    expect(getDNAPairs('')).to.eql([]);
  });
  it('returns ["GC"] when passed "G"', () => {
    expect(getDNAPairs('G')).to.eql(['GC']);
  });
  it('returns ["GC", "GC", "CG"] when passed "GGC"', () => {
    expect(getDNAPairs('GGC')).to.eql(['GC', 'GC', 'CG']);
  });
  it('returns ["GC", "TA", "CG", "AT"] when passed "GTCA"', () => {
    expect(getDNAPairs('GTCA')).to.eql(['GC', 'TA', 'CG', 'AT']);
  });
  it('returns ["GC", "AT", "TA"] when passed "gat"', () => {
    expect(getDNAPairs('gat')).to.eql(['GC', 'AT', 'TA']);
  });
  it('returns ["GC"] when passed "PGYYYHVB"', () => {
    expect(getDNAPairs('PGYYYHVB')).to.eql(['GC']);
  });
  it('returns ["GC"] when passed "bbiugp"', () => {
    expect(getDNAPairs('bbiugp')).to.eql(['GC']);
  });
});

describe('countHashtagsAndMentions', () => {
  it('returns an object', () => {
    expect(typeof countHashtagsAndMentions('')).to.equal('object');
  });
  it('returns {hashtags: 0, mentions: 0} if it finds none', () => {
    expect(countHashtagsAndMentions('hello this is a tweet guaranteed to get very little engagement')).to.eql({ hashtags: 0, mentions: 0 });
  });
  it('returns {hashtags: 1, mentions: 0} if it finds 1 hashtag and no mentions', () => {
    expect(countHashtagsAndMentions('#yolo')).to.eql({ hashtags: 1, mentions: 0 });
  });
  it('returns {hashtags: 0, mentions: 1} if it finds 0 hashtags and 1 mention', () => {
    expect(countHashtagsAndMentions('@yobo')).to.eql({ hashtags: 0, mentions: 1 });
  });
  it('finds multiple hashtags and mentions and returns that number', () => {
    expect(countHashtagsAndMentions('#yolo @bolo #golo')).to.eql({ hashtags: 2, mentions: 1 });
    expect(countHashtagsAndMentions('@boyo #goyo @loyo #zoyo')).to.eql({ hashtags: 2, mentions: 2 });
    expect(countHashtagsAndMentions('"So excited to start at @northcoders on Monday! #learntocode #codingbootcamp"')).to.eql({ hashtags: 2, mentions: 1 });
  });
});
