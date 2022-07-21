/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const preHead = new ListNode(0)
  let cur = preHead
  while (l1 && l2) {
    if (l1.val < l2.val) {
      cur.next = l1
      l1 = l1.next
    }
    else {
      cur.next = l2
      l2 = l2.next
    }
    cur = cur.next
  }
  if (l1)
    cur.next = l1

  if (l2)
    cur.next = l2

  return preHead.next
}
