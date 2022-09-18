# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
import collections
from typing import List, Optional


class Solution:
    def reverseOddLevels(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
      if not root: return None
      queue = collections.deque()
      queue.append(root)
      count = 0
      def exchange(queue:collections.deque[TreeNode]):
        length = len(queue)
        start , end = 0 , length - 1
        while start < end:
          temp = queue[start].val
          queue[start].val = queue[end].val
          queue[end].val = temp
          start += 1
          end -= 1
        
      while len(queue) > 0:
        if count % 2 == 1:
          exchange(queue)
        length = len(queue)  
        
        for i in range(length):
          top = queue.popleft()
          if top.left:
            queue.append(top.left)
          if top.right:
            queue.append(top.right)
        count += 1
      print(root.left.val)
      return root
        
        
root = TreeNode(7)
root.left = TreeNode(13)
root.right = TreeNode(11)

p = Solution()
p.reverseOddLevels(root)
        
      
