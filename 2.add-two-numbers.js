/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode(0);
  let current = dummy;
  let carry = 0;

  while (l1 || l2 || carry) {
    // Get the values from list or 0 if list ended
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;

    // calculate the sum and new carry
    const sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);

    // create new node with ones digit
    current.next = new ListNode(sum % 10);
    current = current.next;

    // Move to next nodes if available
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return dummy.next;
};
// @lc code=end
