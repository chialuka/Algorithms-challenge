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



/**
 * DRYING POTATOES
 * All we eat is water and dry matter.
 * John bought potatoes: their weight is 100 kilograms. Potatoes contain water and dry matter.
 * The water content is 99 percent of the total weight. 
 * He thinks they are too wet and puts them in an oven - at low temperature - for them to lose some water.
 * At the output the water content is only 98%.
 * What is the total weight in kilograms (water content plus dry matter) coming out of the oven?
 * He finds 50 kilograms and he thinks he made a mistake: "So much weight lost for such a small change in water content!"
 * Can you help him?
 * Write function potatoes with
 * int parameter p0 - initial percent of water-
 * int parameter w0 - initial weight -
 * int parameter p1 - final percent of water -
 * potatoes should return the final weight coming out of the oven w1 truncated as an int.
 * @param {Number} p0 
 * @param {Number} w0 
 * @param {Number} p1 
 */
function potatoes(p0, w0, p1) {
  const ans = ((w0 - (p0 * w0 / 100)) * 100) / (100 - p1);
  return Math.floor(ans.toFixed(2));
}



/**
 * MAKING CHANGE
 * Complete the method that will determine the minimum number of coins needed to make change for a given amount in American currency.
 * Coins used will be half-dollars, quarters, dimes, nickels, and pennies, worth 50¢, 25¢, 10¢, 5¢ and 1¢, respectively. 
 * They'll be represented by the symbols H, Q, D, N and P (symbols in Ruby, strings in in other languages)
 * The argument passed in will be an integer representing the value in cents. 
 * The return value should be a hash/dictionary/object with the symbols as keys, and the numbers of coins as values. 
 * Coins that are not used should not be included in the hash. 
 * If the argument passed in is 0, then the method should return an empty hash.
 * @param {Number} amount 
 */
const makeChange = (amount) => {
  const currency = [{ H: 50 }, { Q: 25 }, { D: 10 }, { N: 5 }, { P: 1 }];
  if (amount == 0) return {};
  let change = amount;
  const ans = currency.reduce((acc, val) => {
    const cents = Object.values(val)[0];
    if (change >= cents) {
      acc[Object.keys(val)[0]] = Math.floor(change / cents);
      change = change - (cents * Math.floor(change / cents));
    }
    return acc;
  }, {})
  return ans;
};



/**
 * SUM OF PARTS
 * Let us consider this example (array written in general format):
 * ls = [0, 1, 3, 6, 10]
 * Its following parts:
 * ls = [0, 1, 3, 6, 10]
 * ls = [1, 3, 6, 10]
 * ls = [3, 6, 10]
 * ls = [6, 10]
 * ls = [10]
 * ls = []
 * The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]
 * The function parts_sums (or its variants in other languages) will take as parameter 
 * a list ls and return a list of the sums of its parts as defined above.
 * @param {Array} ls 
 */
function partsSums(ls) {
  const sum = ls.reduce((acc, val) => acc + val, 0);
  let temp = sum;
  const sums = ls.map(x => {
    temp -= x;
    return temp;
  });
  sums.unshift(sum);
  return sums;
}


/**
 * ODDONEOUT
 * Write a function that will take in a string and 
 * return all the unpaired characters (show up an odd number of times in the string) 
 * in the order they were encountered as an array. 
 * In case of multiple options to choose from, take the last occurence as the unpaired character.
 * 
 * Notes
 * A wide range of characters is used, and some of them may not render properly in your browser.
 * Your solution should be linear in terms of string length to pass the last test.
 * @param {String} str 
 */
function oddOneOut(str) {
  let ans = '';
  for (let i = 0; i < str.length; i++) {
   const index = ans.indexOf(str[i]);
   if (index > -1) ans = ans.replace(str[i], '');
   else ans += str[i];
 }
 return ans.split('');
}
