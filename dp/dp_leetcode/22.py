# bracket
from typing import List


class Solution:
  def generateParenthesis(self, n: int) -> List[str]:
    dp = []
    dp.append([None])
    dp.append(['()'])
    
    for i in range(2, n + 1):
      temp = []
      for j in range(i):
        curleft = dp[j]
        curright = dp[i - j - 1]
        
        for left in curleft:
          for right in curright:
            if left == None:
              left = ''
            if right == None:
              right = ''
            temp.append('(' + left + ')' + right)
      dp.append(temp)
    return dp[n]


if __name__ == "__main__":
  s = Solution()
  print(s.generateParenthesis(3))
