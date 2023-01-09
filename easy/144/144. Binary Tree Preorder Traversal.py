# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
from typing import List, Optional


class Solution:
    def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
      
      res = []
      def dfs(cur: Optional[TreeNode]):
        if not cur:
          return 
        
        res.append(cur.val)
        dfs(cur.left)
        dfs(cur.right)
      dfs(root)
      return res
