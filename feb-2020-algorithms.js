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
