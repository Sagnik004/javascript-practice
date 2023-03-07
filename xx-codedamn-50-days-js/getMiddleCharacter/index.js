/*
  Instructions: Get the Middle Character. You are going to be given a word, 
  your job is to return the middle character of the word. If the word's length 
  is odd, return the middle character. If the word's length is even, return the 
  middle 2 characters.
  Example: "test" -> "es", "testing" -> "t", "middle" -> "dd", "A" -> "A"
*/

/**
 * 
 * @param {string} s 
 * @returns {string}
 */
function getMiddle(s) {
  // your code here
  let middle = "";
  const middleIndx = Math.floor(s.length / 2);
  if (s.length % 2 === 0) {
    middle = `${s[middleIndx - 1]}${s[middleIndx]}`;
  } else {
    middle = `${s[middleIndx]}`;
  }

  return middle;
}

console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));
