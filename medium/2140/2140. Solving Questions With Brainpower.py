from typing import List


class Solution:
  def mostPoints(self, questions: List[List[int]]) -> int:
    # dp meaning that the max points we can get at the ith question
    m = len(questions)
    dp = [0] * (m + 1)
    
    for i in range(m - 1, -1, -1):
      (point, brainpower) = questions[i]
      next_point = min(m, i + brainpower + 1)
      dp[i] = max(dp[i + 1], point + dp[next_point])
    return dp[0]


if __name__ == '__main__':
  p = Solution()
  p.mostPoints([[3, 2], [4, 3], [4, 4], [2, 5]])
