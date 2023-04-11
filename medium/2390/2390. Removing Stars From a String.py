class Solution:
    def removeStars(self, s: str) -> str:
      count = 0
      res = ''
      for i in range(len(s)-1,-1,-1):
        if count != 0:
          if s[i] != "*" :
            count -= 1
          else:
            count += 1
          continue
        if s[i] == "*":
          count += 1
        else:
          res += s[i]
      print(res)
      return res[::-1]
        
        
p = Solution()
print(p.removeStars("leet**cod*e"))
