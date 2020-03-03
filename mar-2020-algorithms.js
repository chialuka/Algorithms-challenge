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
