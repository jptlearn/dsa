/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // Map for matching brackets
  const brackets = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  // Stack to store the opening brackets
  const stack = [];

  for (let char of s) {
    // If opening bracket, push to stack
    if (brackets[char]) {
      stack.push(char);
    } else {
      // If closing bracket
      const lastBracket = stack.pop();

      // Check if the matches corresponding opening bracket
      if (brackets[lastBracket] !== char) {
        return false;
      }
    }
  }

  // Valid if stack is empty
  return stack.length === 0;
};
// @lc code=end
