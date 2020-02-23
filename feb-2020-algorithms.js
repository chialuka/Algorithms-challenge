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


/**
 * MULTIPLES OF 3 OR 5
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 * Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
 * Note: If the number is a multiple of both 3 and 5, only count it once.
 * @param {Number} number 
 */
function solution(number){
  let val = 0;
  const count = [];
  while (val + 3 < number) {
    val += 3;
    count.push(val)
  }
  val = 0;
  while (val + 5 < number) {
    val += 5;
    if (val % 3 != 0) count.push(val)
  }
  return count.reduce((acc, val) => acc + val, 0);
}


/**
 * SUM OF DIGITS/DIGITAL ROOT
 * In this kata, you must create a digital root function.
 * A digital root is the recursive sum of all the digits in a number. 
 * Given n, take the sum of the digits of n. If that value has more than one digit, 
 * continue reducing in this way until a single-digit number is produced. 
 * This is only applicable to the natural numbers.
 * @param {Number} n 
 */
function digital_root(n) {
  if (n < 10) return n;
  return digital_root([...n.toString()].reduce((a, b) => +a + +b, 0));
}


/**
 * COUNTING DUPLICATES
 * Write a function that will return the count of distinct case-insensitive alphabetic characters 
 * and numeric digits that occur more than once in the input string. 
 * The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
 * @param {String} text 
 */
function duplicateCount(text){
  const ans = [...text.toLowerCase()].reduce((acc, val) => {
    if (acc[val]) acc[val] += 1;
    else acc[val] = 1;
    return acc;
  }, {});
  return Object.values(ans).filter(x => x > 1).length;
}


/**
 * ROW OF THE ODD TRIANGLE
 * Given a triangle of consecutive odd numbers:
 *             1
 *          3     5
 *       7     9    11
 *   13    15    17    19
 * 21    23    25    27    29
 * find the triangle's row knowing its index (the rows are 1-indexed), e.g.:
 * odd_row(1)  ==  [1]
 * odd_row(2)  ==  [3, 5]
 * odd_row(3)  ==  [7, 9, 11]
 * Note: your code should be optimized to handle big inputs.
 * @param {Number} n 
 */
function oddRow(n) {
  const arr = [];
  const prev = n - 1;
  const last = (Math.pow(prev, 2) + (prev)) + 1;
  arr.push(last);
  let i = 0;
  while (i < prev) {
    arr.push(arr[i] + 2);
    i++
  }
  return arr;
}


/**
 * MEMORY GAME ARRAY
 * In the memory game, numbers are randomly placed face-down in a grid. 
 * Each turn, the player chooses a number to peek at, and then replace, face down. 
 * If they choose two of the same number in a row, those numbers are removed from the grid. 
 * The aim is to clear the board!
 * Your job is to produce an array of pairs of numbers, placed in a random spot in the array.
 * The array (and result) could look somthing like:
 * [3,1,2,1,3,2,4,4] for an 8 tile memory game.
 * Your task is to implement the function createTiles(n) where n is the number of tiles. 
 * The function should return an array with the length n containing randomized, paired, integers starting with 1. 
 * Duplicate pairs are not allowed.
 * Special cases: if n is odd or zero, an empty array should be returned
 * @param {Number} n 
 */
function createTiles(n){
  if (n == 0 || n % 2 != 0) return [];
  const arr = [...Array((n / 2) + 1).keys()].slice(1);
  const dup = [...arr]
  for(let i = 0; i < dup.length; i++) {
    arr.splice(Math.round(Math.random() * arr.length), 0, dup[i]);
  }
  return arr;
}


/**
 * POTION CLASS 101
 * This is your first potion class in Hogwarts 
 * and professor gave you a homework to figure out what color potion will turn into 
 * if he'll mix it with some other potion. 
 * All potions have some color that written down as RGB color from [0, 0, 0] to [255, 255, 255]. 
 * To make task more complicated teacher will do few mixing and after will ask you for final color. 
 * Besides color you also need to figure out what volume will have potion after final mix.
 * Based on your programming background you managed to figure 
 * that after mixing two potions colors will mix as if mix two RGB colors. 
 * For example, if you'll mix potion that have color [255, 255, 0] 
 * and volume 10 with one that have color [0, 254, 0] and volume 5, 
 * you'll get new potion with color [170, 255, 0] and volume 15. 
 * So you decided to create a class Potion that will have two properties: color (a list with 3 integers) 
 * and volume (a number), and one method mix that will accept another Potion and return a mixed Potion.
 */
class Potion {
  constructor (arr, vol) {
    this.color = [arr[0], arr[1], arr[2]];
    this.volume = vol;
  }
  
  
  mix (potion) {
    this.newVolume = this.volume + potion.volume;
    const newRed = Math.ceil(((this.color[0] * this.volume) + (potion.color[0] * potion.volume)) / this.newVolume);
    const newGreen = Math.ceil(((this.color[1] * this.volume) + (potion.color[1] * potion.volume)) / this.newVolume);
    const newBlue = Math.ceil(((this.color[2] * this.volume) + (potion.color[2] * potion.volume)) / this.newVolume);
    const colors = [newRed, newGreen, newBlue];
    const ans = new Potion(colors, this.newVolume)
    return ans;
  }
}


/**
 * MEAN SQUARE ERROR
 * Complete the function that
 * accepts two integer arrays of equal length
 * compares the value each member in one array to the corresponding member in the other
 * squares the absolute value difference between those two values
 * and returns the average of those squared absolute value difference between each member pair.
 * @param {Array} firstArray 
 * @param {Array} secondArray 
 */
const solution = function(firstArray, secondArray) {
  return firstArray.reduce((acc, val, ind) => {
    return acc + Math.pow(val - secondArray[ind], 2)
  }, 0) / firstArray.length;
}


/**
 * NUMBER OF TRAILING ZEROS OF N!
 * Write a program that will calculate the number of trailing zeros in a factorial of a given number.
 * N! = 1 * 2 * 3 * ... * N
 * @param {Number} n 
 */
function zeros (n) {
  let count = 0;
  const limit = Math.floor(Math.log(n) / Math.log(5));
  for (let i = 1; i <= limit; i++) {
    count += Math.floor(n / Math.pow(5, i));
  }
  return count;
}


/**
 * BREAK CAMELCASE
 * Complete the solution so that the function will break up camel casing, using a space between words.
 * @param {String} string 
 */
function solution(string) {
  return string.replace(/[A-Z]/g, ' $&');
}


/**
 * PRIMORIAL OF A NUMBER
 * The primorial of a number ss similar to factorial of a number.
 *  In primorial, not all the natural numbers get multiplied, 
 * only prime numbers are multiplied to calculate the primorial of a number. 
 * It's denoted with P#.
 * Task
 * Given a number N , calculate its primorial.
 * @param {Number} n 
 */
function numPrimorial(n){
  const arr = [2, 3, 5, 7 , 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199];
  return arr.slice(0, n).reduce((a, b) => a * b, 1);
}


/**
 * SCHOOL PAPERWORK
 * Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
 * Your task is to calculate how many blank pages do you need.
 * Note! if n or m < 0 return 0!
 * @param {Number} n 
 * @param {Number} m 
 */
function paperwork(n, m) {
  return m < 0 || n < 0 ? 0 : m * n;
}


/**
 * ALPHABETIC ADDITION
 * Your task is to add up letters to one letter.
 * The function will be given a variable amount of arguments, each one being a letter to add.
 * Notes:
 * Letters will always be lowercase.
 * Letters can overflow (see second to last example of the description)
 * If no letters are given, the function should return 'z'
 * @param  {...String} letters 
 */
function addLetters(...letters) {
  const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  if (!letters.length) return 'z';
  const ans = [...letters].reduce((a, b) => a + (alphabets.indexOf(b) + 1), 0);
  return alphabets[(ans - 1) % 26];
}


/**
 * ROUND BY 0.5
 * Round any given number to the closest 0.5 step
 * Round up if number is as close to previous and next 0.5 steps.
 * @param {Number} n 
 */
function solution(n){
  const diff = Math.ceil(n) - n;
  if (diff > 0.75) return Math.floor(n);
  if (diff < 0.75 && diff > 0.5) return Math.floor(n) + 0.5;
  if (diff <= 0.5 && diff > 0.25) return Math.floor(n) + 0.5;
  return Math.ceil(n);
}
// Alternate solution
// function solution(n) => Math.round(n*2)/2;


/**
 * PANDEMIA
 * ⚠️ The world is in quarantine! There is a new pandemia that struggles mankind. 
 * Each continent is isolated from each other but infected people have spread before the warning. ⚠️
 * 🗺️ You would be given a map of the world in a type of string:
 * s = "01000000X000X011X0X"
 * "0" : uninfected
 * "1" : infected
 * "X" : ocean
 * ⚫ The virus can't spread in the other side of the ocean.
 * ⚫ If one person is infected every person in this continent gets infected too.
 * ⚫ Your task is to find the percentage of human population that got infected in the end.
 * ☑️ Return the percentage % of the total population that got infected.
 * @param {String} s 
 */
function infected(s) {
  let count = 0;
  const arr = s.split('X').map(x => x.length && x.includes('1') ? count += x.length : '');
  return count > 0 ? count / s.split('').filter(x => x != 'X').length * 100 : 0;
}


/**
 * FORM THE LARGEST
 * Given a number , Return _The Maximum number _ could be formed from the digits of the number given .
 * @param {Number} n 
 */
const maxNumber = (n) => Number(n.toString().split``.sort((a, b) => b - a).join``)



/**
 * JUMPING NUMBER
 * Jumping number is the number that All adjacent digits in it differ by 1.
 * @param {Number} n 
 */
function jumpingNumber(n){
  if (n < 10) return "Jumping!!";
  const str = n.toString();
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i + 1] - str[i] != 1 && str[i + 1] - str[i] != -1) return 'Not!!'
  }
  return 'Jumping!!'
}



/**
 * SUM OF TRINAGULAR NUMBERS
 * Your task is to return the sum of Triangular Numbers up-to-and-including the nth Triangular Number.
 * Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) 
 * obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."
 * [01]
 * 02 [03]
 * 04 05 [06]
 * 07 08 09 [10]
 * 11 12 13 14 [15]
 * 16 17 18 19 20 [21]
 * e.g. If 4 is given: 1 + 3 + 6 + 10 = 20.
 * Triangular Numbers cannot be negative so return 0 if a negative number is given.
 * @param {Number} n 
 */
function sumTriangularNumbers(n) {
  if (n <= 0) return 0;
  const arr = [];
  for (let i = 0; i < n; i++) {
    if (!arr.length) arr.push(1)
    else arr.push(arr[arr.length - 1] + arr.length + 1);
  }
  return arr.reduce((a, b) => a + b, 0);
}




/**
 * COMPLETE THE PATTERN
 * You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.
 * Note:Returning the pattern is not the same as Printing the pattern.
 * Rules/Note:
 * If n < 1 then it should return "" i.e. empty string.
 * There are no whitespaces in the pattern.
 * Pattern:
 * 1
 * 22
 * 333
 * ....
 * .....
 * nnnnnn
 * @param {String} n
 */
function pattern(n){
  let output="";
   for (let i = 1; i <= n; i++) {
   let j = 1;
     while(j <= i) {
       output += i + '';
       if (i == j) output += '\n';
       j++;
     }
   }
   return output.slice(0, output.length - 1);
 }



 /**
  * LOOKING FOR A BENEFACTOR
  * The accounts of the "Fat to Fit Club (FFC)" association are supervised by John as a volunteered accountant. 
  * The association is funded through financial donations from generous benefactors. 
  * John has a list of the first n donations: [14, 30, 5, 7, 9, 11, 15] 
  * He wants to know how much the next benefactor should give to the association 
  * so that the average of the first n + 1 donations should reach an average of 30. 
  * The function new_avg(arr, navg) should return the expected donation (rounded up to the next integer) that will permit to reach the average navg.
  * Should the last donation be a non positive number (<= 0) John wants us to throw (or raise) an error
  */
 function newAvg(arr, newavg) {
  const val = newavg * (arr.length + 1) - arr.reduce((a, b) => a + b, 0);
  return val > 0 ? Math.ceil(val) : new TestError('TestError');
}


/**
 * GOLF SCORE
 * I have the par value for each hole on a golf course and my stroke score on each hole. 
 * I have them stored as strings, because I wrote them down on a sheet of paper. 
 * Right now, I'm using those strings to calculate my golf score by hand: 
 * take the difference between my actual score and the par of the hole, and add up the results for all 18 holes.
 * Complete the function which accepts two strings and calculates the golf score of a game. 
 * Both strings will be of length 18, and each character in the string will be a number between 1 and 9 inclusive.
 * @param {String} parList 
 * @param {String} scoreList 
 */
function golfScoreCalculator(parList, scoreList){
  return scoreList.split``.reduce((a, b, c) => a + (b - parList[c]), 0);
}


/**
 * RUNNING PACE
 * Calculate running pace. To do that, we have to know the distance and the time.
 * distance - An float with the number of kilometres
 * time - A string containing the time it took to travel the distance. It will always be minutes:seconds. For example "25:00" means 25 minutes. You don't have to deal with hours.
 * The function should return the pace, for example "4:20" means it took 4 minutes and 20 seconds to travel one kilometre.
 * Note: The pace should always return only the number of minutes and seconds. You don't have to convert these into hours. Floor the number of seconds.
 * @param {Number} distance 
 * @param {String} time 
 */
function runningPace(distance, time) {
  const diff = (+time.slice(-9, -3) + +(time.slice(-2) / 60)) / distance;
  const dec = 60 * (diff - Math.floor(diff));
  let sec = Math.round(dec) - dec < 0.00001 ? Math.round(dec) : Math.trunc(dec);
  if (sec < 10) sec = `0${sec}`
  return `${Math.trunc(diff)}:${sec}`
}



/**
 * WHAT'S IN A NAME
 * Test whether or not the string contains all of the letters which spell a given name, in order.
 * @param {String} str 
 * @param {String} name 
 */
function nameInStr(str, name){
  const letters = [...str].filter(x => name.toLowerCase().includes(x));
  if (letters.length < name.length) return false;
  let temp = letters;
  for (let i = 0; i < name.length; i++) {
    const ind = temp.findIndex(x => x.toLowerCase() == name[i].toLowerCase());
    if (ind < 0) return false
    temp = temp.slice(ind + 1)
  }
  return true;
}



/**
 * SELECTIVE FEAR OF NUMBERS
 * I've got a crazy mental illness. I dislike numbers a lot. 
 * But it's a little complicated: The number I'm afraid of depends on which day of the week it is... 
 * This is a concrete description of my mental illness:
 * Monday --> 12
 * Tuesday --> numbers greater than 95
 * Wednesday --> 34
 * Thursday --> 0
 * Friday --> numbers divisible by 2
 * Saturday --> 56
 * Sunday --> 666 or -666
 * Write a function which takes a string (day of the week) and an integer (number to be tested) so it tells the doctor if I'm afraid or not. (return a boolean)
 * 
 * @param {String} day 
 * @param {Number} num 
 */
const AmIAfraid = function(day, num){
  const values = {
    'Monday': (x) => x == 12,
    'Tuesday': (x) => x > 95,
    'Wednesday': (x) => x == 34,
    'Thursday': (x) => x == 0,
    'Friday': (x) => x % 2 == 0,
    'Saturday': (x) => x == 56,
    'Sunday': (x) => [666, -666].includes(x)
  }
  return values[day](num);
}


/**
 * POLYDIVISIBLE NUMBERS
 * A polydivisible number is divisible in an unusual way. 
 * The first digit is cleanly divisible by 1, the first two digits are cleanly divisible by 2, the first three by 3, and so on.
 * Your job: check if a number is polydivisible or not.
 * Return true if it is, and false if it isn't.
 * @param {Number} x 
 */
function polydivisible(x) {
  const str = x.toString();
  for (let i = 1; i <= str.length; i++) {
    if (str.slice(0, i) % i != 0) return false
  }
  return true;
}


/**
 * STRING ENDS WITH?
 * Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
 * @param {String} str 
 * @param {String} ending 
 */
const solution = (str, ending) => !ending.length ? true: str.slice(-ending.length) == ending;


/**
 * TWO OLDEST AGES
 * The two oldest ages function/method needs to be completed. 
 * It should take an array of numbers as its argument and return the two highest numbers within the array. 
 * The returned value should be an array in the format [second oldest age, oldest age].
 * The order of the numbers passed in could be any order. The array will always include at least 2 items.
 * @param {Array} ages 
 */
const twoOldestAges = (ages) => ages.sort((a, b) => a - b).slice(-2)



/**
 * MAXIMUM MULTIPLE
 * Given a Divisor and a Bound , Find the largest integer N , Such That:
 * Conditions :
 * N is divisible by divisor
 * N is less than or equal to bound
 * N is greater than 0.
 * @param {Number} divisor 
 * @param {Number} bound 
 */
const maxMultiple = (divisor, bound) => Math.floor(bound / divisor) * divisor;



/**
 * SORT OUT THE MEN FROM THE BOYS
 * Given an array/list [] of n integers , Separate The even numbers from the odds , or Separate the men from the boys !alt !alt
 * Notes
 * Return an array/list where Even numbers come first then odds
 * Since , Men are stronger than Boys , Then Even numbers in ascending order While odds in descending .
 * Array/list size is at least *4*** .
 * Array/list numbers could be a mixture of positives , negatives .
 * Have no fear , It is guaranteed that no Zeroes will exists . !alt
 * Repetition of numbers in the array/list could occur , So (duplications are not included when separating).
 * @param {Array} arr 
 */
function menFromBoys(arr){
  const ar = [...new Set(arr)];
  const odd = ar.filter((x, y , z) => x % 2 != 0).sort((a, b) => b - a);
  const even = ar.filter((x, y, z) => x % 2 == 0).sort((a, b) => a - b);
  return even.concat(odd);;
}



/**
 * FORM THE MINIMUM
 * Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).
 * @param {Array} values 
 */
const minValue = (values) => +[...new Set(values)].sort((a, b) => a - b).join('');
