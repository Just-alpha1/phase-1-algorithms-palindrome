/*
Pseudocode:
1. Take the input string.
2. Reverse the string by splitting it into an array, reversing the array, and joining it back into a string.
3. Compare the original string with the reversed string.
4. If they are equal, return true (it's a palindrome); otherwise, return false.
*/

// Function to check if a string is a palindrome
function isPalindrome(str) {
  // Reverse the string and compare it to the original
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

// Export the function for testing
module.exports = isPalindrome;

// Test cases
console.log('Testing isPalindrome function:');
console.log('isPalindrome("madam"):', isPalindrome("madam")); // Expected: true
console.log('isPalindrome("racecar"):', isPalindrome("racecar")); // Expected: true
console.log('isPalindrome("robot"):', isPalindrome("robot")); // Expected: false
console.log('isPalindrome("level"):', isPalindrome("level")); // Expected: true
console.log('isPalindrome("hello"):', isPalindrome("hello")); // Expected: false
console.log('isPalindrome("a"):', isPalindrome("a")); // Expected: true (single character)
console.log('isPalindrome(""):', isPalindrome("")); // Expected: true (empty string)
