from typing import List


class Solution:
  def maxProfit(self, prices: List[int]) -> int:
    min_price = float("inf")
    m = len(prices)
    dp = [0] * m
    for i in range(m):
      min_price = min(min_price, prices[i])
      dp[i] = max(dp[i - 1], prices[i] - min_price)
    return dp[-1]


if __name__ == '__main__':
  s = Solution()
  prices = [7, 1, 5, 3, 6, 4]
  print(s.maxProfit(prices))
