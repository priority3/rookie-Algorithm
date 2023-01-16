import bisect
from typing import List


class Solution:
  def insert (self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
    position = bisect.bisect(intervals, newInterval)
    
    intervals.insert(position, newInterval)
    print(intervals)
    res = []
    for ind, value in enumerate(intervals):
      if not res or value[0] > res[-1][1]:
        res.append(value)
      else:
        res[-1][1] = max(res[-1][1], value[1])
    return res
  
  #


# class Solution:
#   def insert (self, intervals: List[List[int]], newInterval: List[int]) -> List[List[int]]:
#     if not intervals:
#       return [newInterval]
#     if newInterval[0] >= intervals[-1][1]:
#       intervals[-1][1]
#       return
#     res = []
#     tempfix = -2
#     for ind, value in enumerate(intervals):
#       start = value[0]
#       end = value[1]
#
#       if tempfix == -1:
#         res.append(value)
#         continue
#
#       if newInterval[0] > end:
#         res.append(value)
#         continue
#
#       if start <= newInterval[0] and newInterval[0] <= end:
#         tempfix = ind
#         continue
#
#       if start <= newInterval[1] and newInterval[1] <= end:
#         res.append([intervals[tempfix][0], end])
#         tempfix = -1
#         continue
#
#       if newInterval[1] < start:
#         res.append([intervals[tempfix][0], newInterval[1]])
#         res.append(value)
#         tempfix = -1
#
#     if tempfix != -1:
#       res.append([intervals[tempfix][0], max(intervals[tempfix][1], newInterval[1])])
#
#     return res
#
#
if __name__ == '__main__':
  p = Solution()
  print(
    p.insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8])
  )
