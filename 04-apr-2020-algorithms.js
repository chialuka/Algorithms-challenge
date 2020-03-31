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
