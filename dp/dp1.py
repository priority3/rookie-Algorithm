# frog problem
def dp_frog(n):
  dp = [0] * (n)
  dp[1] = 1
  dp[2] = 2
  for i in range(3, n):
    dp[i] = dp[i - 1] + dp[i - 2]
  
  return dp[n - 1]


# leetcode_62
def uniquePaths(m: int, n: int) -> int:
  dp = [[0] * n for _ in range(m)]
  dp[0][0] = 1
  for i in range(m):
    for j in range(n):
      if i > 0 or j > 0:
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
  
  return dp[m - 1][n - 1]


if __name__ == '__main__':
  # print('frog problem:', dp_frog(10))
  print('leetcode_62:', uniquePaths(3, 7))
