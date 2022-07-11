// Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  const res = new ListNode()
  while (head) {
    const temp = new ListNode(head.val)
    temp.next = res.next
    res.next = temp
    head = head.next
  }
  return res.next
}

