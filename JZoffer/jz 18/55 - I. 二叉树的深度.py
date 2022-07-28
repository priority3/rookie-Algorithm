# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

# import queue


class Solution:
    def maxDepth(self, root: TreeNode) -> int:
      if not root : return 0
      queue = []
      queue.append(root)
      res = 0
      while queue:
        temp = []
        for node in queue:
          if node.left:
            temp.append(node.left)
          if node.right:
            temp.append(node.right)
        res += 1
        queue = temp
      return res
