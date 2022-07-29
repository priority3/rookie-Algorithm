class Solution:

    def verifyPostorder(self, postorder: List[int]) -> bool:

        def recur(left, right):
            if left >= right: return True
            p = left
            while postorder[p] < postorder[right]:
                p += 1
            # 子树划分
            m = p
            # 判断是否是搜索树
            while postorder[p] > postorder[right]:
                p += 1
            return p == right and recur(left, m - 1) and recur(m, right - 1)

        return recur(0, len(postorder) - 1)
