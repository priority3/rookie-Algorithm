/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
  let arr = [];
  while (head !== null) {
    arr.push(head.val);
    head = head.next;
  }

  let max = 0;
  let res = 0;
  for(let i = 0; i < arr.length; i++) {
    res = arr[i]+arr[arr.length-i-1];
    max = Math.max(max,res)
  }
  return max;
  

};