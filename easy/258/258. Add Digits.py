
class Solution:
    def addDigits(self, num: int) -> int:
      res = num
      while res >= 10:
        res = sum([int(_) for _ in str(res)])
      return res
        
