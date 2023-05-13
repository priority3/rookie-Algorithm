from typing import List


class Solution:
  def minCostClimbingStairs(self, cost: List[int]) -> int:
    m = len(cost)
    # dp = [0] * (m + 1)
    #
    # for i in range(2, m + 1):
    #   dp[i] = min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
    # return dp[m]
    
    a, b = 0, 0
    for i in range(2, m + 1):
      a, b = b, min(a + cost[i - 2], b + cost[i - 1])
    return b


if __name__ == '__main__':
  p = Solution()
  p.minCostClimbingStairs([10, 15, 20])
