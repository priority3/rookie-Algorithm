from typing import List


class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
      notzero = filter(lambda x: format(x,'b').find('0') > 0, nums)
      maxbit = max(notzero)
      print("🚀 ~ file: 2.6189. 按位与最大的最长子数组.py ~ line 9 ~ maxbit", maxbit)
      left , right = 0, len(nums)-1
      def getbit(left:int,right:int): 
        l , r = left , right
        res = 1
        while l < r:
          res = res & nums[l] & nums[r]
          l += 1
          r -= 1
        return res
      def getres(left:int,right:int):
        if left == right:
          return 0
        if getbit(left,right) == maxbit:
          return right - left
        else:
          return max(getres(left+1,right),getres(left,right-1))
      return getres(left,right)
        
      
      
p = Solution()
print(p.longestSubarray([1,2,3,4]))
