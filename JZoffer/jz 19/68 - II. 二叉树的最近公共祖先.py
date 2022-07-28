# # Definition for a binary tree node.
# # class TreeNode:
# #     def __init__(self, x):
# #         self.val = x
# #         self.left = None
# #         self.right = None


# class Solution:

#     def lowestCommonAncestor(self, root: TreeNode, p: TreeNode,
#                              q: TreeNode) -> TreeNode:
#         if not root : return None
#         def find(root, p, q):
#             if not root: return None
#             isp = False
#             isq = False
#             queue = []
#             queue.append(root)
#             while len(queue):
#                 cur = queue.pop()
#                 if p.val == cur.val:
#                     isp = True
#                 if q.val == cur.val:
#                     isq = True
#                 if isp and isq:
#                     return cur
#                 if cur.left:
#                     queue.append(cur.left)
#                 if cur.right:
#                     queue.append(cur.right)
#             return None
#         self.lowestCommonAncestor(root.left, p, q)
#         res = find(root, p, q)
#         root != None and self.lowestCommonAncestor(root.right, p, q)
#         return res

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def lowestCommonAncestor(self, root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
        if not root or p == root or q == root:
            return root
        left = self.lowestCommonAncestor(root.left, p, q)
        right = self.lowestCommonAncestor(root.right, p, q)
        if not left : return right
        if not right : return left
        return root
