from typing import List
import bisect
class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
      # return bisect.bisect_right(nums,target)
      
      left, right = 0, len(nums)-1
      if target > nums[right]:
        return len(nums)
      while left < right:
        mid = (left + right) >> 1
        if nums[mid] == target:
          return mid
        elif nums[mid] > target:
          right = mid
        else:
          left = mid + 1
      return left
          

            
p = Solution()
print(p.searchInsert([1,3,5,6],0))
