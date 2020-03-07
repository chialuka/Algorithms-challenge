/**
 * SCRABBLE SCORE
 * Write a program that, given a word, computes the scrabble score for that word.
 * Letter Values
 * You'll need these:
 * Letter                           Value
 * A, E, I, O, U, L, N, R, S, T       1
 * D, G                               2
 * B, C, M, P                         3
 * F, H, V, W, Y                      4
 * K                                  5
 * J, X                               8
 * Q, Z                               10
 * @param {String} str 
 */
function scrabbleScore(str){
  const obj = {
    1: 'aeioulnrst',
    2: 'dg',
    3: 'bcmp',
    4: 'fhvwy',
    5: 'k',
    8: 'jx',
    10: 'qz'
  }
  
  let count = 0;
  
  str.toLowerCase().split``.map(x => Object.entries(obj).reduce((acc, val) => val[1].includes(x) ? count += +val[0] : count +=  0, 0))
  return count;
}



/**
 * ABSENT VOWEL
 * Your job is to figure out the index of which vowel is missing from a given string:
 * A has an index of 0,
 * E has an index of 1,
 * I has an index of 2,
 * O has an index of 3,
 * U has an index of 4.
 * Notes: There is no need for string validation and every sentence given will contain all vowles but one. Also, you won't need to worry about capitals.
 * @param {String} x 
 */
const absentVowel = (x) => ['a', 'e', 'i', 'o', 'u'].findIndex(y => !x.includes(y))




/**
 * LOTTERY MACHINE
 * Your task is to write an update for a lottery machine. 
 * Its current version produces a sequence of random letters and integers (passed as a string to the function). 
 * Your code must filter out all letters and return unique integers as a string, in their order of first appearance. 
 * If there are no integers in the string return "One more run!"
 * @param {String} str 
 */
const lottery = (str) => {
  const ans = str.match(/[0-9]/g)
  return ans ? [...new Set(ans)].join('') : 'One more run!';
};



/**
 * MAXIMUM GAP
 * Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.
 * @param {Array} numbers 
 */
const maxGap = (numbers) => {
  const vals = numbers.sort((a, b) => b - a).map((x, y, z) => x - z[y + 1]);
  vals.pop();
  return Math.max(...vals)
}



/**
 * HOW MUCH COFFEE
 * Your task here is to define how much coffee you need to stay awake after your night. 
 * You will have to complete a function that take an array of events in arguments, 
 * according to this list you will return the number of coffee you need to stay awake during day time. 
 * Note: If the count exceed 3 please return 'You need extra sleep'.
 * The list of events can contain the following:
 * You come here, to solve some kata ('cw').
 * You have a dog or a cat that just decide to wake up too early ('dog' | 'cat').
 * You just watch a movie ('movie').
 * Other events can be present and it will be represent by arbitrary string, just ignore this one.
 * Each event can be downcase/lowercase, or uppercase. If it is downcase/lowercase you need 1 coffee by events and if it is uppercase you need 2 coffees.
 * @param {*} events 
 */
function howMuchCoffee(events) {
  const allowed = ['cw', 'cat', 'dog', 'movie'];
  const value = events.reduce((x, y) => allowed.includes(y) ? x += 1 : allowed.map(a => a.toUpperCase()).includes(y) ? x += 2 : x += 0, 0)
  return value > 3 ? 'You need extra sleep' : value;
}



/**
 * PRODUCT OF ARRAY MAXIMUM NUMBERS
 * Given an array/list [] of integers , Find the product of the k maximal numbers.
 * @param {Array} numbers 
 * @param {Number} size 
 */
const maxProduct = (numbers, size) => numbers.sort((a, b) => a - b).slice(-size).reduce((x, y) => x * y, 1);



/**
 * DETECT PANGRAM
 * A pangram is a sentence that contains every single letter of the alphabet at least once. 
 * For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, 
 * because it uses the letters A-Z at least once (case is irrelevant).
 * Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
 * @param {String} string 
 */
function isPangram(string){
  return [...new Set(string.match(/[a-z]/gi).map(x => x.toLowerCase()))].length == 26
}



/**
 * PRODUCT ARRAY
 * Given an array/list [] of integers, 
 * Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].
 * @param {Array} numbers 
 */
function productArray(numbers){
  const values = [];
  for(let i = 0; i < numbers.length; i++) {
    const result = numbers.filter((x, y) => y != i).reduce((a, b) => a * b, 1);
    values.push(result);
  }
  return values;
}



/**
 * MINIMUM STEPS
 * Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array 
 * until their Sum becomes greater or equal to K.
 * @param {Array} numbers 
 * @param {Number} value 
 */
function minimumSteps(numbers, value){
  const val = numbers.sort((a, b) => a - b);
  const ans = [];
  for (let i = 0; i < val.length; i++) {
    if (ans.reduce((a, b) => a + b, 0) < value) ans.push(val[i])
  }
  return ans.length - 1;
}



/**
 * WILL YOU MAKE IT
 * You were camping with your friends far away from home, but when it's time to go back, 
 * you realize that you fuel is running out and the nearest pump is 50 miles away! 
 * You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. 
 * Considering these factors, write a function that tells you if it is possible to get to the pump or not. 
 * Function should return true (1 in Prolog) if it is possible and false (0 in Prolog) if not. 
 * The input values are always positive.
 * @param {Number} distanceToPump 
 * @param {Number} mpg 
 * @param {Number} fuelLeft 
 */
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg * fuelLeft >= distanceToPump ? true : false
};



/**
 * BACKSPACE IN STRINGS
 * Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"
 * Your task is to process a string with "#" symbols.
 * @param {String} s 
 */
function cleanString(s) {
  let str = [...s];
	for (let i = 0; i < str.length; i++) {
    if (str[i] == '#' && i >= 1) {
      str.splice((i - 1), 2);
      i -= 2;
    }
  }
  return str.filter(x => x != '#').join('')
};



/**
 * CONSONANT VALUE
 * Given a lowercase string that has alphabetic characters only and no spaces, 
 * return the highest value of consonant substrings. 
 * Consonants are any letters of the alpahabet except "aeiou".
 * We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.
 * @param {String} s 
 */
function solve(s) {
  const alpha = '0abcdefghijklmnopqrstuvwxyz'
  const words = s.replace(/[a,e,i,o,u]/g, '-').split('-').filter(x => x != '');
  const values = words.map(word => [...word].reduce((a, b) => a + alpha.indexOf(b), 0));
  return Math.max(...values);
};
