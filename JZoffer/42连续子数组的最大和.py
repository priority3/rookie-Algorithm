from typing import List


class Solution:

    def maxSubArray(self, nums: List[int]) -> int:
        cur, res = nums[0], nums[0]
        for num in nums[1:]:
          cur = max(num, cur + num)
          res = max(res, cur)
        return res
