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

  // compare with other strings
  for (let i = 1; i < strs.length; i++) {
    // keep reducing prefix until it match
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }

  return prefix;
};
// @lc code=end
