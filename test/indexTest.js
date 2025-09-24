// test/indexTest.js
const assert = require('chai').assert;
const isPalindrome = require('../index.js');

describe('Palindrome', function() {
  it('should return true for "racecar"', function() {
    assert.isTrue(isPalindrome('racecar'));
  });

  it('should return true for "mom"', function() {
    assert.isTrue(isPalindrome('mom'));
  });

  it('should return true for "abba"', function() {
    assert.isTrue(isPalindrome('abba'));
  });

  it('should return true for "a"', function() {
    assert.isTrue(isPalindrome('a'));
  });

  it('should return false for "hi"', function() {
    assert.isFalse(isPalindrome('hi'));
  });

  it('should return false for "robot"', function() {
    assert.isFalse(isPalindrome('robot'));
  });
});