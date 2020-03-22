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



/**
 * ALTERNATE CAPITALIZATION
 * Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. 
 * Index 0 will be considered even.
 * For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF'].
 * @param {String} s 
 */
function capitalize(s){
  const arr = [...s];
  const even = arr.map((x, y) => y % 2 == 0 ? x.toUpperCase() : x).join('')
  const odd = arr.map((x, y) => y % 2 != 0 ? x.toUpperCase() : x).join('')
  return [even, odd];
};



/**
 * FIND THE FIRST NON CONSECUTIVE NUMBER
 * Your task is to find the first element of an array that is not consecutive.
 * By not consecutive we mean not exactly 1 larger than the previous element of the array.
 * @param {Array} arr 
 */
function firstNonConsecutive (arr) {
  const val = arr.find((x, y) => x - arr[y - 1] > 1);
  return val == undefined ? null : val;
}



/**
 * NON CONSECUTIVE NUMBERS
 * Your task is to find all the elements of an array that are non consecutive.
 * @param {Array} arr 
 */
function allNonConsecutive (arr) {
  const val = []
  for (let i = 1; i < arr.length; i++) {
   if (arr[i] - arr[i - 1] > 1) val.push({ i, n: arr[i]});
  }
  return val;
}



/**
 * HELLO, NAME OR WORLD
 * Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).
 * @param {String} name 
 */
function hello(name) {
  let capitalized;
  if (name) {
   capitalized = name.charAt(0).toUpperCase();
  }
  return name ? `Hello, ${capitalized}${name.slice(1).toLowerCase()}!` : 'Hello, World!';
}
// Alternate solution
// const hello = (name) => name ? `Hello, ${name.charAt(0).toUpperCase()}${name.slice(1).toLowerCase()}!` : 'Hello, World!';



/**
 * CLOCK
 * Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.
 * Your task is to make 'Past' function which returns time converted to milliseconds.
 * @param {Number} h 
 * @param {Number} m 
 * @param {Number} s 
 */
const past = (h, m, s) => ((h * 3600) + (m * 60) + s) * 1000;



/**
 * THE HIDDEN WORD
 * Maya writes weekly articles to a well known magazine, but she is missing one word each time she is about to send the article to the editor. 
 * The article is not complete without this word. Maya has a friend, Dan, and he is very good with words, 
 * but he doesn't like to just give them away. He texts Maya a number and she needs to find out the hidden word. 
 * The words can contain only the letter: "a", "b", "d", "e", "i", "l", "m", "n", "o", and "t".
 * Luckily, Maya has the key:
 * "a" - 6 "b" - 1 "d" - 7 "e" - 4 "i" - 3 "l" - 2 "m" - 9 "n" - 8 "o" - 0 "t" - 5
 * You can help Maya by writing a function that will take a number between 100 and 999999 and return a string with the word.
 * The input is always a number, contains only the numbers in the key. The output should be always a string with one word, all lowercase.
 * @param {Number} num 
 */
function hiddenWord(num) {
  const obj = { 6: 'a', 1: 'b', 7: 'd', 4: 'e', 3: 'i', 2: 'l', 9: 'm', 8: 'n', 0: 'o', 5: 't' };
  return [...num.toString()].reduce((a, b) => a + obj[b], '');
}



/**
 * TRIPLE TROUPLE
 * Create a function that will return a string that combines all of the letters of the three inputed strings in groups. 
 * Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!
 * @param {String} one 
 * @param {String} two 
 * @param {String} three 
 */
function tripleTrouble(one, two, three){
  let str = '';
  for (let i = 0; i < one.length; i++) {
    str += one[i] + two[i] + three[i]
  }
  return str;
 }


/**
 * IS HE GONNA SURVIVE
 * A hero is on his way to the castle to complete his mission. 
 * However, he's been told that the castle is surrounded with a couple of powerful dragons! 
 * each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. 
 * Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
 * Return True if yes, False otherwise :)
 * @param {Number} bullets 
 * @param {Number} dragons 
 */
const hero = (bullets, dragons) => bullets >= (dragons * 2)



/**
 * NUMBER OF DIVISIONS
 * Calculate how many times a number can be divided by a given number.
 * @param {Number} n 
 * @param {Number} divisor 
 */
const divisions = (n, divisor) => {
  let count = 0;
  let num = n;
  while (num >= divisor) {
    num /= divisor;
    count++;
  }
  return count;
};



/**
 * LATE RIDE
 * One night you go for a ride on your motorcycle. 
 * At 00:00 you start your engine, and the built-in timer automatically begins counting the length of your ride, in minutes. 
 * Off you go to explore the neighborhood.
 * When you finally decide to head back, you realize there's a chance the bridges on your route home are up, leaving you stranded! 
 * Unfortunately, you don't have your watch on you and don't know what time it is. 
 * All you know thanks to the bike's timer is that n minutes have passed since 00:00.
 * Using the bike's timer, calculate the current time. Return an answer as the sum of digits that the digital timer in the format hh:mm would show.
 * @param {Number} n 
 */
function lateRide(n) {
  const hh = Math.trunc(n / 60).toString();
  const mm = (n % 60).toString();
  return [...hh, ...mm].reduce((a, b) => +a + +b, 0);
}



/**
 * BREAKING CHOCOLATE
 * Your task is to split the chocolate bar of given dimension n x m into small squares. 
 * Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.
 * @param {Number} n 
 * @param {Number} m 
 */
const breakChocolate = (n,m) => n * m ? (n * m) - 1 : 0;



/**
 * CHECK THESE LETTERS
 * Write a function that checks if all the letters in the second string are present in the first one at least once, regardless of how many times they appear:
 * @param {Array} arr 
 */
const letterCheck = (arr) => ![...new Set(arr[1].toLowerCase())].some(x => !arr[0].toLowerCase().includes(x))



/**
 * DIFFERENCE IN AGE
 * You will be given an array of all the family members' ages, in any order. 
 * The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. 
 * Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].
 * @param {Array} ages 
 */
const differenceInAges = (ages) => {
  const min = Math.min(...ages);
  const max = Math.max(...ages);
  return [min, max, max - min] 
}



/**
 * SUM OF ODD NUMBERS
 * Given the triangle of consecutive odd numbers:
 *              1
 *           3     5
 *        7     9    11
 *    13    15    17    19
 * 21    23    25    27    29
 * ...
 * Calculate the row sums of this triangle from the row index (starting at index 1)
 * @param {Number} n 
 */
function rowSumOddNumbers(n) {
	const prev = n - 1;
  const last = (Math.pow(prev, 2) + (prev)) + 1;
  const arr = [last];
  let i = 0;
  while (i < prev) {
    arr.push(arr[i] + 2);
    i++
  }
  return arr.reduce((a, b) => a + b, 0);
}


/**
 * REMOVING ELEMENTS
 * Take an array and remove every second element out of that array. Always keep the first element and start removing with the next element.
 * Example:
 * myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];
 * @param {Array} arr 
 */
const removeEveryOther = (arr) => arr.filter((x, y) => y % 2 == 0)
