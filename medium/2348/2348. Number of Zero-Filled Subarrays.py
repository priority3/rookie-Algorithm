from typing import List
class Solution:
    def zeroFilledSubarray(self, nums: List[int]) -> int:
      res = 0
      temp = 0
      def getSum(n):
        return n*(n+1)//2
      for num in nums:
        if num == 0:
          temp+=1
        else:
          res += getSum(temp)
          temp = 0
      
      return res if temp == 0 else res + getSum(temp)
