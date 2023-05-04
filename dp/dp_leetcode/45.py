from typing import List


class Solution:
  
  def jump(self, nums: List[int]) -> int:
    m = len(nums)
    maxposition = 0
    end = 0
    step = 0
    for i in range(m - 1):
      maxposition = max(maxposition, i + nums[i])
      
      if i == end:
        end = maxposition
        step += 1
    return step
