from collections import deque
from typing import Optional
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def widthOfBinaryTree(self, root: Optional[TreeNode]) -> int:
      queue = deque([(root, 0)])
      res = 0
      while len(queue):
        length = len(queue)
        _,level_start = queue[0]
        for i in range(length):
          node, index = queue.popleft()
          if node.left:
            queue.append((node.left, index*2))
          if node.right:
            queue.append((node.right, index*2+1))
          res = max(res, index - level_start + 1)
      return res
