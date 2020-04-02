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
