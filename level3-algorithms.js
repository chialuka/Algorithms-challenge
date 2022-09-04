/**
 * Rail Fence Cipher: Encoding and Decoding
 * Create two functions to encode and then decode a string using the Rail Fence Cipher.
 * This cipher is used to encode a string by placing each character successively in a diagonal along a set of "rails".
 * First start off moving diagonally and down.
 * When you reach the bottom, reverse direction and move diagonally and up until you reach the top rail.
 * Continue until you reach the end of the string.
 * Each "rail" is then read left to right to derive the encoded string.
 * For example, the string "WEAREDISCOVEREDFLEEATONCE" could be represented in a three rail system as follows:
 * 
 * W       E       C       R       L       T       E
 * 	 E   R   D   S   O   E   E   F   E   A   O   C  
 * 		 A       I       V       D       E       N    
 * 
 * The encoded string would be:
 * WECRLTEERDSOEEFEAOCAIVDEN
 * 
 * Write a function/method that takes 2 arguments, a string and the number of rails, and returns the ENCODED string.
 * Write a second function/method that takes 2 arguments, an encoded string and the number of rails, and returns the DECODED string.
 * For both encoding and decoding, assume number of rails >= 2 and that passing an empty string will return an empty string.
 * Note that the example above excludes the punctuation and spaces just for simplicity. There are, however, tests that include punctuation. Don't filter out punctuation as they are a part of the string.
 */

function encodeRailFenceCipher(string, numberRails) {
  const arr = Array.from({ length: numberRails }, (v, i) => i);
  const newArrs = arr.map(() => Array());
  let res = { ind: 0, dir: 'down' };
  
  [...string].forEach((item) => {
    newArrs[res.ind].push(item);
    if (res.dir === 'down') {
      if (res.ind === numberRails - 1) {
        res.dir = 'top';
        res.ind -= 1;
      } else {
        res.ind += 1;
      }
    } else {
      if (res.ind === 0) {
        res.dir = 'down';
        res.ind += 1;
      } else {
        res.ind -= 1;
      }
    }
  });
  const newVal = []
  newArrs.forEach((arr) => newVal.push(...arr));
  return newVal.join('')
}


function decodeRailFenceCipher(string, numberRails) {
  const div = Math.floor(string.length / ((numberRails * 2) - 2));
  let rem = string.length % ((numberRails * 2) - 2);
  const arr = Array.from({ length: numberRails }, () => 0);
  const mapArr = arr.map((num, ind) => ind === 0 || ind === arr.length - 1 ? num += div : num += div * 2);
  
  let res = { ind: 0, dir: 'down' };
  
  while (rem > 0) {
    mapArr[res.ind] += 1;
    rem -= 1;
    if (res.dir === 'down') {
      if (res.ind === numberRails - 1) {
        res.dir = 'top';
        res.ind -= 1;
      } else {
        res.ind += 1;
      }
    } else {
      if (res.ind === 0) {
        res.dir = 'down';
        res.ind += 1;
      } else {
        res.ind -= 1;
      }
    }
  }
  const strArr = [...string];
  const decodedArr = mapArr.map((num) => strArr.splice(0, num));
  let finalAns = '';
  let newRes = { ind: 0, dir: 'down' };
  while (finalAns.length < string.length) {
    finalAns += decodedArr[newRes.ind][0];
    decodedArr[newRes.ind].splice(0, 1);
    if (newRes.dir === 'down') {
      if (newRes.ind === numberRails - 1) {
        newRes.dir = 'top';
        newRes.ind -= 1;
      } else {
        newRes.ind += 1;
      }
    } else {
      if (newRes.ind === 0) {
        newRes.dir = 'down';
        newRes.ind += 1;
      } else {
        newRes.ind -= 1;
      }
    }
  }
  return finalAns;
}
