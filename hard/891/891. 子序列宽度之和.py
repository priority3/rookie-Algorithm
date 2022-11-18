from typing import List

MOD = 10 ** 9 + 7
pow2 = [1]
for i in range(100000):
    pow2.append(pow2[-1] * 2 % MOD)
print(pow2)
class Solution:
    def sumSubseqWidths(self, nums: List[int]) -> int:
      length = len(nums)
      nums.sort()
      res = 0
      for i in range(length):
        res = (res + nums[i] * (pow2[i] - pow2[length - i - 1] + MOD)) % MOD
      return res
      
        
