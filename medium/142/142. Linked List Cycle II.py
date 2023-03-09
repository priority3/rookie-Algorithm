# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

from typing import Optional


class Solution:
    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:
      slow = fast = head
      
      while fast and fast.next:
        slow, fast = slow.next, fast.next.next
        
        if slow == fast:
          fast = head
          while fast != slow:
            fast, slow = fast.next, slow.next
          return slow
      
      return None
