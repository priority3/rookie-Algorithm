// Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function deleteNode(head: ListNode | null, val: number): ListNode | null {
  if (head && head.val === val)
    return head.next
  let cur = head; let pre = head
  while (!cur) {
    if (cur?.val === val) {
      pre.next = cur.next
      break
    }
    pre = cur
    cur = cur.next
  }
  return head
}
