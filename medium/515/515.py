# msg = 'hello world'
# print(msg)
# Definition for a binary tree node.
# from typing import Optional
from ast import List
import sys
from typing import Deque, Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def largestValues(self, root: Optional[TreeNode]) -> List[int]:
      # if not root:
      #   return root
      queue,res =Deque([root]), []
      if root:
        queue.append(root)
      
      while queue:
        max = -sys.maxsize-1
        for i in range(len(queue)):
          shift = queue.popleft()
          max = max(max,shift.val)
          if shift.left:
            queue.append(shift.left)
          if shift.right:
            queue.append(shift.right)
        res.append(max)
      return res
