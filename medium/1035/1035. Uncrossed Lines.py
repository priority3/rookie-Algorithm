from functools import cache
from typing import List


class Solution:
  def maxUncrossedLines(self, a: List[int], b: List[int]) -> int:
    @cache
    def dp(i: int, j: int) -> int:
      if i < 0 or j < 0:
        return 0
      
      return max(
        dp(i - 1, j),
        dp(i, j - 1),
        dp(i - 1, j - 1) + int(a[i] == b[j]),
      )
    
    return dp(len(a) - 1, len(b) - 1)
