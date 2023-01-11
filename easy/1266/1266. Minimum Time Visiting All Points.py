from typing import List


class Solution:
  def minTimeToVisitAllPoints (self, points: List[List[int]]) -> int:
    res = 0
    for i in range(1, len(points)):
      xgap = abs(points[i][0] - points[i - 1][0])
      ygap = abs(points[i][1] - points[i - 1][1])
      minGap = min(xgap, ygap)
      res += minGap + abs(xgap - ygap)
    return res
