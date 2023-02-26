from typing import List
class Solution:
    def leftRigthDifference(self, nums: List[int]) -> List[int]:
      leftSum = []
      rightSum = []
      for i in range(0,len(nums)):
        leftSum.append(sum(nums[:i]))
        rightSum.append(sum(nums[i+1:]))
      return [abs(leftSum[i]-rightSum[i]) for i in range(0,len(nums))]

p = Solution()
p.leftRigthDifference([10,4,8,3])
