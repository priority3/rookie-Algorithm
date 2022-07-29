# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> TreeNode:
      # 根节点 left right
      def recur (nodeInd,left,right) :
        if left > right : return
        # 建立根节点
        node = TreeNode(preorder[nodeInd])
        # 获得根节点在中序遍历中的位置
        i = dic[preorder[nodeInd]]
        node.left = recur(nodeInd+1,left,i-1)
        node.right = recur(i-left+nodeInd+1,i+1,right)
        return node
      dic,preorder = {},preorder
      for i in range(len(preorder)):
        dic[inorder[i]] = i
      return recur(0,0,len(preorder)-1)
