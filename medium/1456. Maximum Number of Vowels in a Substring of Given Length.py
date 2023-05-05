class Solution:
  def maxVowels(self, s: str, k: int) -> int:
    vowels = ['a', 'e', 'i', 'o', 'u']
    m = len(s)
    # move window
    # dp[i] meaning that the max vowels in s[i-k:i]
    windows = [0] * m
    for i in range(k):
      if s[i] in vowels:
        windows[i] = windows[i - 1] + 1
      else:
        windows[i] = windows[i - 1]
    for i in range(k, m):
      if s[i] in vowels and s[i - k] not in vowels:
        windows[i] = windows[i - 1] + 1
      elif s[i] not in vowels and s[i - k] in vowels:
        windows[i] = windows[i - 1] - 1
      else:
        windows[i] = windows[i - 1]
    return max(windows)


p = Solution()
# 4
print(p.maxVowels("abciiidef", 3))
