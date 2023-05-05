class Solution:
  def maxVowels(self, s: str, k: int) -> int:
    vowels = ['a', 'e', 'i', 'o', 'u']
    m = len(s)
    # dp[i] meaning that the max vowels in s[i-k:i]
    dp = [0] * m
    for i in range(k):
      if s[i] in vowels:
        dp[i] = dp[i - 1] + 1
      else:
        dp[i] = dp[i - 1]
    print(dp)
    for i in range(k, m):
      if s[i] in vowels and s[i - k] not in vowels:
        dp[i] = dp[i - 1] + 1
      elif s[i] not in vowels and s[i - k] in vowels:
        dp[i] = dp[i - 1] - 1
      else:
        dp[i] = dp[i - 1]
    return max(dp)


p = Solution()
# 4
print(p.maxVowels("abciiidef", 3))
