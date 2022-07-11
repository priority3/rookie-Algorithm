# Definition for a Node.


class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random

# class Solution:
#     def copyRandomList(self, head: 'Node') -> 'Node':
#       if not head:
#         return None
#       cash = {}
#       cur = head
#       while cur:
#         cash[cur] = Node(cur.val)
#         cur = cur.next
#       cur = head
#       while cur:
#         cash[cur].next = cash[cur.next]
#         cash[cur].random = cash[cur.random]
#       return cash[head]
      
#  solution 2
class Solution:
    def copyRandomList(self,head:'Node') -> 'Node':
      if not head:
        return None
      # build node
      cur = head
      while cur:
        temp = Node(cur.val)
        temp.next = cur.next
        cur.next = temp
        cur = temp.next
      # connect
      cur = head
      while cur:
        cur.next.random = cur.random.next if cur.random else None
        cur = cur.next.next
      cur = head.next
      pre = head
      while cur.next:
        # pre 必须先链接 防止丢失
        pre.next = pre.next.next
        cur.next = cur.next.next
        pre = pre.next
        cur = cur.next
      return cur
