from typing import Optional


# Definition for a binary tree node.
class TreeNode:

    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:

    def longestZigZag(self, root):
        # def dfs(node):
        #     if not node:
        #         return [-1, -1, -1]
        #     left_subtree, right_subtree = dfs(node.left), dfs(node.right)
        #     return [
        #         left_subtree[1] + 1,
        #         right_subtree[0] + 1,
        #         max(left_subtree[1] + 1, right_subtree[0] + 1, left_subtree[2], right_subtree[2])
        #     ]

        res = 0

        def dfs(node, isLeft, current):
            if not node:
                return
            nonlocal res
            res = max(res, current)
            if isLeft:
                dfs(node.left, False, current + 1)
                dfs(node.right, True, 1)
            else:
                dfs(node.right, True , current + 1)
                dfs(node.left, False, 1)
            return
        dfs(root, True, 0)
        dfs(root, False, 0)
        return res


p = Solution()
root = TreeNode(1)
root.right = TreeNode(1)
root.right.right = TreeNode(1)
root.right.left = TreeNode(1)
root.right.right.right = TreeNode(1)
root.right.right.left = TreeNode(1)
root.right.right.left.right = TreeNode(1)
root.right.right.left.right.right = TreeNode(1)
p.longestZigZag(root)
