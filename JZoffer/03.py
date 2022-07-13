from cmath import log
from typing import List


class Solution:
    def findRepeatNumber(self, nums: List[int]) -> int:
      s = set()
      res = 0
      for i in range(len(nums)):
        if nums[i] in s:
          res =  nums[i]
        else :
          s.add(nums[i])
      return res
p = Solution()
print(p.findRepeatNumber([1,2,3,2]))
