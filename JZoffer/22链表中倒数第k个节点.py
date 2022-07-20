# Definition for singly-linked list.
class ListNode:

    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:

    def getKthFromEnd(self, head: ListNode, k: int) -> ListNode:
        if k == 0: return head
        fast = head
        flag = False
        slow = head
        while fast:
            if k == 0:
                flag = True
            k -= 1
            if not fast:
                return slow
            fast = fast.next
            if flag:
                slow = slow.next
        return slow
