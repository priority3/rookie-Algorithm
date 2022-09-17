from typing import List


class Solution:
    def smallestSubarrays(self, nums: List[int]) -> List[int]:
      bigBit = 0
      for i in range(1,len(nums)):
        bigBit = max(nums[i] | nums[i-1],bigBit)
      
      return [1]
p = Solution()
p.smallestSubarrays([1,0,2,1,3])
