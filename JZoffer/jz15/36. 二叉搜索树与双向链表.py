"""
# Definition for a Node.
class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
"""


class Solution:
    def treeToDoublyList(self, root: 'Node') -> 'Node':
        def dfs(self,cur):
            if not cur : return
            dfs(self,cur.left)
            if(self.pre):
                self.pre.right,cur.left = cur,self.pre
            else :
                self.head = cur
            self.pre = cur
            dfs(self,cur.right)
                
        if not root:
            return None
        self.pre = None
        dfs(self,root)
        self.head.left,self.pre.right = self.pre,self.head
        return self.head
