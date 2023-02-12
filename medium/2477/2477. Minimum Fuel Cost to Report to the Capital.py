import math
from typing import List


class Solution:
  def minimumFuelCost(self, roads: List[List[int]], seats: int) -> int:
    #     build the map
    roadsMap = [[] for _ in range(len(roads) + 1)]
    for fromCity, toCity in roads:
      roadsMap[fromCity].append(toCity)
      roadsMap[toCity].append(fromCity)
    res = 0
    
    def dfs(cur: int, prev: int) -> int:
      nonlocal res
      people = 1
      
      for u in roadsMap[cur]:
        if u == prev:
          continue
        people += dfs(u, cur)
      if cur > 0:
        res += math.ceil(people / seats)
      return people
    
    dfs(0, -1)
    print(res)
    return res


p = Solution()
p.minimumFuelCost([[3, 1], [3, 2], [1, 0], [0, 4], [0, 5], [4, 6]], 2)
