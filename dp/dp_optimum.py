# leetcode_62 optimum
# n*m -> n
def uniquePaths(m: int, n: int) -> int:
  dp = [1] * n
  
  for _ in range(1, m):
    for j in range(n):
      if j == 0:
        continue
      else:
        dp[j] += dp[j - 1]
  return dp[n - 1]


if __name__ == "__main__":
  print(uniquePaths(3, 7))
