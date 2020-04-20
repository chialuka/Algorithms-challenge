/**
 * MORE ZEROS THAN ONES
 * Create a moreZeros function which will receive a string for input, 
 * and return an array containing only the characters from that string whose binary representation of its ASCII value consists of more zeros than ones.
 * You should remove any duplicate characters, keeping the first occurence of any such duplicates, 
 * so they are in the same order in the final array as they first appeared in the input string.
 * @param {String} s 
 */
function moreZeros(s) {
  const values = [...s].map((x, y) => s.charCodeAt(y).toString(2))
    .map(x => [...x].sort())
    .map((x, y) => x.length / 2 < x.lastIndexOf('0') + 1 ? s[y] : '')
    .filter(x => x.length);
  return [...new Set(values)]
}



/**
 * WHAT DOMINATES YOUR ARRAY
 * A zero-indexed array arr consisting of n integers is given. 
 * The dominator of array arr is the value that occurs in more than half of the elements of arr.
 * @param {Array} arr 
 */
function dominator(arr) {
  const res = arr.reduce((acc, val) => {
    if (val in acc) acc[val] += 1;
    else acc[val] = 1;
    return acc;
  }, {});
  const ans = Math.max(...Object.values(res))
  if (ans > arr.length / 2) return Number(Object.keys(res).find(key => res[key] === ans));
  else return -1
}


/**
 * DISEMVOWEL
 * Your task is to write a function that takes a string and return a new string with all vowels removed.
 * @param {String} str 
 */
function disemvowel(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  return [...str].filter(x => !vowels.includes(x.toLowerCase())).join('');
}



/**
 * ARRAY EXCHANGE
 * t's time for some array exchange! 
 * The objective is simple: exchange the elements of two arrays in-place in a way that their new content is also reversed.
 * @param {Array} a 
 * @param {Array} b 
 */
function exchangeWith(a, b) {
  let newA = [...a.reverse()];
  let newB = [...b.reverse()];
  a.splice(0, a.length, [...newB]);
  b.splice(0, b.length, [...newA]);
  const temp = [a[0], b[0]];
  a.pop();
  a.push(...temp[0]);
  b.pop();
  b.push(...temp[1]);
}



/**
 * FILL THE HARD DRIVE
 * Your task is to determine how many files of the copy queue you will be able to save into your Hard Disk Drive.
 * Input:
 * Array of file sizes (0 <= s <= 100)
 * Capacity of the HD (0 <= c <= 500)
 * Output:
 * Number of files that can be fully saved in the HD
 * @param {Array} sizes 
 * @param {Number} hd 
 */
function save(sizes, hd) {
  let count = 0;
  let val = sizes[0];
  for (let i = 1; i <= sizes.length; i++) {
    if (val > hd || count == sizes.length) {
      return count;
    } else {
      val += sizes[i];
      count++
    }
  }
  return count;
}



/**
 * REPLACEMENT
 * About the replacement
 * Choose exactly one element from the sequence and replace it with another integer > 0. You are not allowed to replace a number with itself, or to change no number at all.
 * Task
 * Find the lowest possible sequence after performing a valid replacement, and sorting the sequence.
 * Input:
 * Input contains sequence with N integers. All elements of the sequence > 0. The sequenc will never be empty.
 * Output:
 * Return sequence with N integers — which includes the lowest possible values of each sequence element, after the single replacement and sorting has been performed.
 * @param {Array} a 
 */
function replacement(a) {
  const great = Math.max(...a);
  a.splice(a.indexOf(great), 1, great == 1 ? 2 : 1);
  return a.sort((x, y) => x - y);
}


/**
 * RESPONSIBLE DRINKING
 * Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.
 * Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover.
 * @param {String} s 
 */
function hydrate(s) {
  const val = s.match(/[0-9]/g).reduce((a, b) => +a + +b, 0);
  return val == 1 ? val + ' glass of water' : val + ' glasses of water'
}



/**
 * FIND THE MIDDLE NUMBER
 * Given a string of characters, I want the function findMiddle()/find_middle() to return the middle number in the product of each digit in the string.
 * Example: 's7d8jd9' -> 7, 8, 9 -> 7*8*9=504, thus 0 should be returned as an integer.
 * Not all strings will contain digits. In this case and the case for any non-strings, return -1.
 * If the product has an even number of digits, return the middle two digits
 * @param {String} str 
 */
function findMiddle(str) {
  if (!str || typeof str != 'string' || str.search(/\d/) == -1) return -1;
  const val = str.match(/\d/g).reduce((a, b) => a * b, 1).toString();
  return val.length % 2 == 1 ? +(val[Math.floor(val.length / 2)]) : +(val.slice(val.length / 2 - 1, val.length / 2 + 1))
}



/**
 * ESREVER
 * Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)
 * (the dedicated builtin(s) functionalities are deactivated)
 * @param {array} array 
 */
const reverse = function (array) {
  return array.reduce((acc, val) => {
    if (acc) acc.unshift(val);
    return acc;
  }, [])
}



/**
 * SUM EVEN NUMBERS
 * Write a function named sumEvenNumbers, taking a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.
 * @param {Array} input 
 */
const sumEvenNumbers = (input) => input.filter(x => x % 2 == 0).reduce((a, b) => a + b, 0)



/**
 * VALIDATE MY PASSWORD
 * I will give you a string. You respond with "VALID" if the string meets the requirements or "INVALID" if it does not.
 * Passwords must abide by the following requirements:
 * More than 3 characters but less than 20.
 * Must contain only alphanumeric characters.
 * Must contain letters and numbers.
 * @param {String} password 
 */
function validPass(password) {
  const val = password.match(/[^0-9a-z]/gi) || !password.match(/[0-9]/g) || !password.match(/[a-z]/gi);
  return val || password.length <= 3 || password.length >= 20 ? 'INVALID' : 'VALID';
}



/**
 * MY LANGUAGES
 * You are given a dictionary/hash/object containing some languages and your test results in the given languages. 
 * Return the list of languages where your test score is at least 60, in descending order of the results.
 * @param {Object} results 
 */
function myLanguages(results) {
  const val = Object.values(results).sort((a, b) => b - a).filter(x => x >= 60)
  const arr = [];
  for (let i = 0; i < val.length; i++) {
    let res = Object.keys(results).find(key => results[key] === val[i]);
    arr.push(res)
  }
  return arr;
}



/**
 * HALVING SUM
 * Given a positive integer n, calculate the following sum:
 * n + n/2 + n/4 + n/8 + ...
 * @param {Number} n 
 */
function halvingSum(n) {
  let val = n;
  let count = n;
  while (val > 0) {
    count += Math.floor(val / 2);
    val /= 2
  }
  return count;
}


/**
 * FIND MIN AND MAX
 * Implement a function that returns the minimal and the maximal value of a list (in this order).
 * @param {Arra} arr 
 */
const getMinMax = (arr) => [Math.min(...arr), Math.max(...arr)];



/**
 * ABBREVIATE A TWO WORD NAME
 * Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
 * The output should be two capital letters with a dot separating them.
 * @param {String} name 
 */
const abbrevName = (name) => `${name[0].toUpperCase()}.${name[name.indexOf(' ') + 1].toUpperCase()}`



/**
 * TOTAL AMOUNT OF POINTS
 * Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.
 * For example: ["3:1", "2:2", "0:1", ...]
 * Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:
 * if x>y - 3 points
 * if x<y - 0 point
 * if x=y - 1 point
 * @param {*} games 
 */
function points(games) {
  const arr = [];
  for (let i = 0; i < games.length; i++) {
    if (+games[i][0] > +games[i][games[i].length - 1]) arr.push(3)
    if (+games[i][0] < +games[i][games[i].length - 1]) arr.push(0)
    if (+games[i][0] == +games[i][games[i].length - 1]) arr.push(1)
  }
  return arr.reduce((a, b) => +a + +b, 0);
}



/**
 * ARRAY PLUS ARRAY
 * I want to get the sum of two arrays...actually the sum of all their elements.
 * @param {Array} arr1 
 * @param {Array} arr2 
 */
function arrayPlusArray(arr1, arr2) {
  return [arr1, arr2].reduce((acc, val) => acc + val.reduce((x, y) => x + y, 0), 0);
}
