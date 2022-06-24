/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function (head) {
  let cur = head.next
  let pre = head
  let count = 0
  let change = undefined
  while (cur) {
    if (cur.val === 0) {
      pre.val = count
      if (cur.next === null) {
        pre.next = null
      } else {
        pre.next = cur
      }
      pre = cur
      count = 0
    }

    count += cur.val
    cur = cur.next
  }
  return head
}
