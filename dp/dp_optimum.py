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


# leetcode_72
def minDistance(word1: str, word2: str) -> int:
  m, n = len(word1), len(word2)
  dp = [i for i in range(n + 1)]
  for i in range(1, m + 1):
    temp = dp[0]
    # init
    dp[0] = i
    for j in range(1, n + 1):
      pre = temp
      temp = dp[j]
      if word1[i - 1] == word2[j - 1]:
        dp[j] = pre
      else:
        dp[j] = min(dp[j], dp[j - 1], pre) + 1
  return dp[n]


if __name__ == "__main__":
  print(uniquePaths(3, 7))
