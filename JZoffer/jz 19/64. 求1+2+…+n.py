class Solution:
    def sumNums(self, n: int) -> int:
      return int(n >= 1) and n+self.sumNums(n-1) 
