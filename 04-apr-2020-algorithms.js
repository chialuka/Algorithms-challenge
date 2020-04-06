/**
 * MORE ZEROS THAN ONES
 * Create a moreZeros function which will receive a string for input, 
 * and return an array containing only the characters from that string whose binary representation of its ASCII value consists of more zeros than ones.
 * You should remove any duplicate characters, keeping the first occurence of any such duplicates, 
 * so they are in the same order in the final array as they first appeared in the input string.
 * @param {String} s 
 */
function moreZeros(s){
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
  const res = arr.reduce((acc,val) => {
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
function replacement(a){
  const great = Math.max(...a);
  a.splice(a.indexOf(great), 1, great == 1 ? 2 : 1);
  return a.sort((x, y) => x - y);
}
