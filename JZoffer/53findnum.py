from typing import List


class Solution:
    def search(self, nums: List[int], target: int) -> int:
      res = 0
      for i in range(len(nums)):
        if target == nums[i]:
          res += 1
      return res
