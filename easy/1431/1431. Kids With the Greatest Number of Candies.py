from typing import List
class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
      res = [False] * len(candies)
      maxnum = max(candies)
      for i in range(len(candies)):
        if candies[i] + extraCandies >= maxnum:
          res[i] = True
      return res

