/**
 * ARRH, GRABSCRAP!
 * Pirates have notorious difficulty with enunciating. 
 * They tend to blur all the letters together and scream at people.
 * At long last, we need a way to unscramble what these pirates are saying.
 * Write a function that will accept a jumble of letters as well as a dictionary, 
 * and output a list of words that the pirate might have meant.
 */
function grabscrab(anagram, dictionary) {
  const s = anagram.split('').sort((a, b) => a.localeCompare(b)).join('');
  const val = dictionary.map(x => x.split('').sort((a, b) => a.localeCompare(b)).join('')).map((y, z) => y == s ? z : '').filter(x => x !== '');
  const arr = [];
  for (let i = 0; i < val.length; i++) {
    arr.push(dictionary[val[i]]);
  }
  return arr;
}


/**
 * REMOVE DUPLICATE WORDS
 * Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
 * @param {String} s 
 */
function removeDuplicateWords (s) {
  const ans = s.split(' ').reduce((acc, val) => {
    if (!acc.includes(val)) acc.push(val);
    return acc;
  }, []).join(' ');
  return ans;
}


/**
 * SMALL ENOUGH?
 * You will be given an array (a) and a limit value (limit). 
 * You must check that all values in the array are below or equal to the limit value. 
 * If they are, return true. Else, return false.
 * You can assume all values in the array are numbers.
 * Do not use loops. Do not modify input array.
 * @param {Array} a 
 * @param {Integer} limit 
 */
function smallEnough(a, limit){
  return !a.some(x => x > limit)
}


/**
 * WILL YOU SURVIVE THE ZOMBIE ONSLAUGHT?
 * I'm afraid you're in a rather unfortunate situation. 
 * You've injured your leg, and are unable to walk, and a number of zombies are shuffling towards you, 
 * intent on eating your brains. Luckily, you're a crack shot, and have your trusty rifle to hand.
 * The zombies start at range metres, and move at 0.5 metres per second. Each second, you first shoot one zombie, 
 * and then the remaining zombies shamble forwards another 0.5 metres.
 * If any zombies manage to get to 0 metres, you get eaten. If you run out of ammo before shooting all the zombies, 
 * you'll also get eaten. To keep things simple, we can ignore any time spent reloading.
 * Write a function that accepts the total number of zombies, a range in metres, and the number of bullets you have.
 * If you shoot all the zombies, return "You shot all X zombies." 
 * If you get eaten before killing all the zombies, and before running out of ammo, 
 * return "You shot X zombies before being eaten: overwhelmed." 
 * If you run out of ammo before shooting all the zombies, return "You shot X zombies before being eaten: ran out of ammo."
 * (If you run out of ammo at the same time as the remaining zombies reach you, return "You shot X zombies before being eaten: overwhelmed.".)
 * Good luck! (I think you're going to need it.)
 * 
 */
function zombie_shootout(zombies, range, ammo) {
  const num = range * 2;
  if (ammo < zombies && ammo < num) return `You shot ${ammo} zombies before being eaten: ran out of ammo.`
  if (num >= zombies && ammo >= zombies) return `You shot all ${zombies} zombies.`;
  else return `You shot ${num} zombies before being eaten: overwhelmed.`
}


/**
 * MINIMUM TO MULTIPLE
 * Given two integers a and x, return the minimum non-negative number to add to / subtract from a to make it a multiple of x.
 */
function minimum(a, x) {
  const res1 = (x * Math.ceil(a / x)) - a;
  const res2 = a - (x * Math.floor(a /x));
  return res1 < res2 ? res1 : res2;
}


/**
 * BALANCED NUMBER
 * Balanced number is the number that 
 * The sum of all digits to the left of the middle digit(s) 
 * and the sum of all digits to the right of the middle digit(s) are equal.
 * Given a number, Find if it is Balanced or not .
 * @param {Number} number 
 */
function balancedNum(number) {
  if (number < 100) return 'Balanced';
  const numString = number.toString();
  let center = Math.floor(numString.length / 2);
  let right = numString.slice(center + 1);
  let left;
  if (numString.length % 2 != 0) {
    left = numString.slice(0, center)
  } else {
    left = numString.slice(0, center - 1);
  }
  const vals = [left, right];
  const ans = vals.map(x => [...x].reduce((acc , val) => +acc + +val));
  return ans[0] == ans[1] ? 'Balanced' : 'Not Balanced';
}


/**
 * REPEATED SUBSTRING
 * For a given nonempty string s find a minimum substring t and the maximum number k, 
 * such that the entire string s is equal to t repeated k times. 
 * The input string consists of lowercase latin letters. 
 * Your function should return a tuple (in Python) (t, k) or an array (in Ruby and JavaScript) [t, k]
 * @param {String} s
 */
function f(s) {
  const first = s.charAt(0);
  const nextIndex = [...s.slice(1)].indexOf(first);
  const word = s.slice(0, nextIndex + 1);
  if (nextIndex == -1) return [s, 1];
  let count = 0;
  [...s].forEach((x, y) => x == first && s.slice(y).includes(word) ? count++ : '');
  return s.slice(nextIndex).includes(word) ? [word, count] : [s, count];
}


/**
 * SUM OF MINIMUMS
 * Given an 2D array of size m * n. Your task is to find the sum of minimum value in each row.
 * @param {Array} arr 
 */
function sumOfMinimums(arr) {
  const val = arr.map(x => Math.min(...x)).reduce((acc, val) => acc + val);
  // Alternate solution
  // const val = arr.reduce((acc, val) => acc + Math.min(...val), 0);
  return val;
}



/**
 * NO ODDITIES
 * Write a small function that returns the values of an array that are not odd.
 * All values in the array will be integers. Return the good values in the order they are given.
 * @param {Array} values 
 */
function noOdds( values ){
  return values.filter(x => x % 2 == 0);
}


/**
 * SUM OF ANGLES
 * Find the total sum of angles in an n sided shape. N will be greater than 2.
 * @param {Number} n 
 */
const angle = (n) => 180 * (n - 2);
