# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def kthLargest(self, root: TreeNode, k: int) -> int:
      def dfs(self,cur):
        if not cur : return
        dfs(self,cur.right)
        self.count+=1
        if self.count == k:
          self.res = cur.val
        dfs(self,cur.left)
      
      self.count = 0
      self.res = 0
      dfs(self,root)
      return self.res
