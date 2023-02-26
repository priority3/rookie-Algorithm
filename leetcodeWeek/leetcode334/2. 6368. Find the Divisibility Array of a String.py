from typing import List
class Solution:
    def divisibilityArray(self, word: str, m: int) -> List[int]:
      res = []
      words = list(word)
      amount = 0
      
      for i in range(0,len(words)):
        amount = amount * 10 + int(words[i])
        amount %= m
        res.append(1 if amount == 0 else 0)
      return res
    
p = Solution()
p.divisibilityArray("1010", 10)
