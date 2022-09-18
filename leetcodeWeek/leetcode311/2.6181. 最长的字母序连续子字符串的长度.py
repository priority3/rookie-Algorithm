class Solution:
    def longestContinuousSubstring(self, s: str) -> int:
      if len(s) == 1: return 1
      res = 0
      count = 1
      for i in range(1,len(s)):
        if ord(s[i]) - ord(s[i-1]) == 1:
          count += 1
        else:
          res = max(count,res)
          count = 1
      return  res if count == 1 else max(count,res)
    
p = Solution()
p.longestContinuousSubstring("yrpjofyzubfsiypfre")
