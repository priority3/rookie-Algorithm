# Definition for singly-linked list.
from typing import List, Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
        
class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
      
      def dfs(node:ListNode):
        stack = [node]
        res = []
        while stack:
          node = stack.pop()
          res.append(node.val)
          if node.next:
            stack.append(node.next)
        return res

      def list_connect(list:List[int]):
        if not list:
          return None
        head = ListNode(list[0])
        node = head
        for i in list[1:]:
          node.next = ListNode(i)
          node = node.next
        return head
      res = []
      for i in lists:
        if i:
          res += dfs(i)
      return list_connect(sorted(res))
