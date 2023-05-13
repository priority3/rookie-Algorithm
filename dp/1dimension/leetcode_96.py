class Solution:
  def numTrees(self, n: int) -> int:
    dp = [0] * (n + 1)
    dp[0] = 1
    dp[1] = 1
    # dp[i] = dp[0] * dp[i - 1] + dp[1] * dp[i - 2] + ... + dp[i - 1] * dp[0]
    for i in range(2, n + 1):
      for j in range(1, i + 1):
        dp[i] += dp[j - 1] * dp[i - j]
    return dp[-1]


if __name__ == '__main__':
  p = Solution()
  print(p.numTrees(3))
