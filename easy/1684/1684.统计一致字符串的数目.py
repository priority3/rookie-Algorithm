from typing import List


class Solution:
    def countConsistentStrings(self, allowed: str, words: List[str]) -> int: 
      count = 0
      dic = {}
      # for i in range(len(allowed)):
      #   str = allowed[i]
      #   if not dic.get(str):
      #     dic[str] = True
      # dic.keys()
      for str in words:
        flag = True
        for i in str:
          if allowed.find(i) == -1:
            flag = False
            break
        if flag:
          count += 1 
      return count
p = Solution()
p.countConsistentStrings('ab',['aba'])
