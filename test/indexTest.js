// test/indexTest.js
const assert = require('chai').assert;
const isPalindrome = require('../index.js');

describe('Palindrome', function() {
  it('should return true for "racecar"', function() {
    assert.isTrue(isPalindrome('racecar'));
  });
  it('should return false for "hello"', function() {
    assert.isFalse(isPalindrome('hello'));
  });
  it('should return false for "A man a plan a canal Panama"', function() {
    assert.isFalse(isPalindrome('A man a plan a canal Panama')); // Fails due to spaces and case
  });
  it('should return true for an empty string', function() {
    assert.isTrue(isPalindrome(''));
  });
});