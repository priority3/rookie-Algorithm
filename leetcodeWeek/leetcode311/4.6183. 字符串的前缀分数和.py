from typing import List


class Solution:
    def sumPrefixScores(self, words: List[str]) -> List[int]:
      map = {}
      res = []
      for str in words:
        for i in range(1,len(str)+1):
          if str[0:i] not in map:
            map[str[0:i]] = 0
          map[str[0:i]] += 1
        
      print(map)
      for str in words:
        score = 0
        for i in range(1,len(str)+1):
          score += map[str[0:i]]
        res.append(score)
      print(res)
      return res 

p = Solution()
p.sumPrefixScores( ["abc","ab","bc","b"])
