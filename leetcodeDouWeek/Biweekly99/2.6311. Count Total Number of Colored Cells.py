class Solution:
    def coloredCells(self, n: int) -> int:
      res = 1
      for i in range(1, n):
        res += i*4      
      print(res)
      return res
p = Solution()
p.coloredCells(4)
