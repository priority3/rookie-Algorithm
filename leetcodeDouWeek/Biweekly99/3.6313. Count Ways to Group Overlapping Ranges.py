from typing import List


class Solution:
    def countWays(self, ranges: List[List[int]]) -> int:
        ranges.sort()
        res = [ranges[0]]
        
        for i in range(len(ranges)):
          start,end = ranges[i]
          
          if(start <= res[-1][1]):
            res[-1][1] = max(res[-1][1], end)
          else:
            res.append([start, end])
        return 2 ** len(res) % ((10 ** 9) + 7)
        
p = Solution()
print(p.countWays([[1,3],[10,20],[2,5],[4,8]]))
