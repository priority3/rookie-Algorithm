from collections import defaultdict
from typing import List
class Solution:
    def makeConnected(self, n: int, connections: List[List[int]]) -> int:
      if len(connections) < n - 1:
            return -1
      map = defaultdict(list)
      for pair in connections:
        map[pair[0]].append(pair[1])
        map[pair[1]].append(pair[0])
      visited = [0] * n
      def dfs(node):
        if visited[node]:
          return 0
        visited[node] = 1
        for nei in map[node]:
          dfs(nei)
        return 1
      
      return sum(dfs(i) for i in range(n)) - 1
      
          
p = Solution()
print(p.makeConnected(6,[[0,1],[0,2],[0,3],[1,2]]))
         
