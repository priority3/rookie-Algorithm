from typing import List


class Solution:
    def mostCompetitive(self, nums: List[int], k: int) -> List[int]:
      stack = []
      for ind,num in enumerate(nums):
        # while (stack) and nums[stack[-1]] > num and ind < len(nums)-1 + len(stack) - k:
        while (stack) and stack[-1] > num and k < len(stack)+len(nums)-ind:
          stack.pop() 
        stack.append(num)
        if len(stack) > k:
          stack.pop()
      print(stack)
      return stack


p = Solution()
p.mostCompetitive([71,18,52,29,55,73,24,42,66,8,80,2], 3)
