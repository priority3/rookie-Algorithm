# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
from typing import Optional
class Solution:
    def isCompleteTree(self, root: Optional[TreeNode]) -> bool:
      
      queue = []
      flag = False
      queue.append(root)
      while len(queue):
        node = queue.pop(0)
        if node and flag: return False
        if not node:
          flag = True
          continue
        queue.append(node.left)
        queue.append(node.right)
      
      return True
