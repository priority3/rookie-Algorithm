class Solution:
  def minSteps(self, s: str, t: str) -> int:
    # arrs = [0] * 26
    # arrt = [0] * 26
    res = 0
    for i in range(26):
      char = chr(ord('a') + i)
      # arrs[i] = s.count(char)
      # arrt[i] = t.count(char)
      res += abs(s.count(char) - t.count(char))
    print(res)
    return res


p = Solution()
p.minSteps("cotxazilut", "nahrrmcchxwrieqqdwdpneitkxgnt")
