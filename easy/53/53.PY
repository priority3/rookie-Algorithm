from ast import List
import sys
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
      pre = 0
      cnt = -sys.maxint-1
      for num in nums:
        pre = max(pre+num, num)
        cnt = max(cnt, pre)
      return cnt

