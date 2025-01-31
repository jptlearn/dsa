/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // Handle edge cases
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];

  // Take first string as references
  let prefix = strs[0];
};
// @lc code=end
