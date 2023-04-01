from typing import List
class Solution:
    def search(self, nums: List[int], target: int) -> int:
      left , right = 0 , len(nums) - 1
      mid = (left + right) // 2
      res = -1
      while left <= right:
        print(left, right, mid)
        if nums[mid] == target:
          res = mid
          break
        elif nums[mid] < target:
          left = mid + 1
        else:
          right = mid - 1
        mid = (left + right) // 2
      print(res)
      return res

p = Solution()
p.search([9], 9)
