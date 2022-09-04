/**
 * Longest Common Sequence
 * Write a function called LCS that accepts two sequences and returns the longest subsequence common to the passed in sequences.
 * A subsequence is different from a substring. The terms of a subsequence need not be consecutive terms of the original sequence.
 * Example subsequence
 * Subsequences of "abc" = "a", "b", "c", "ab", "ac", "bc" and "abc".
 * 
 * LCS examples
 * LCS( "abcdef" , "abc" ) => returns "abc"
 * LCS( "abcdef" , "acf" ) => returns "acf"
 * LCS( "132535365" , "123456789" ) => returns "12356"
 */
function LCS(x, y) {
  const newArray = [...x];
  let result = "";
  [...y].forEach((letter) => {
    const letterIndex = newArray.indexOf(letter);
    if (letterIndex > -1) {
      result += newArray[letterIndex]
      newArray.splice(0, letterIndex + 1);
    };
  })
  return result;
}
