function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = word.split('').reverse().join('');
  console.log(reversedWord)
  return word=== reversedWord;
}

/* 
  Add your pseudocode here
  //Split the word to a Substring
  //Reverse the word
  //Join the substring to form the reversed word.
  //check if the word is a palindrome
  //Return True if word is a palindrome and vice versa


*/

/*
  Add written explanation of your solution here.
  //The function IsPalindrome takes a word as a parameter.
  //The word is the converted to a substring to allow iteration.
  //The substring is then reversed using the reverse method.
  //The substring is then joined using the join function to form the complete rversed word.
  //The new reversed word is then stored in a variable for comparison.
  //The function returns a boolean value based on the comparison  above.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
