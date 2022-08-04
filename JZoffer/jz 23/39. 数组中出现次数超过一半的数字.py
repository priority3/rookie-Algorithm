class Solution:
    def majorityElement(self, nums: List[int]) -> int:
      key = {}
      for i in nums:
        key[i] = key.get(i, 0) + 1
      res = 0
      for j in key.keys():
        res = j if key[j] > len(nums) / 2 else res
      return res
