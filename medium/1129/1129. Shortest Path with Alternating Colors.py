import collections
from enum import Enum
from typing import List


class Color(Enum):
  kInit = 0
  kRed = 1
  kBlue = 2


class Solution:
  def shortestAlternatingPaths(self, n: int, redEdges: List[List[int]], blueEdges: List[List[int]]) -> List[int]:
    res = [-1] * n
    graph = [[] for _ in range(n)]
    for u, v in redEdges:
      graph[u].append((v, Color.kRed))
    for u, v in blueEdges:
      graph[u].append((v, Color.kBlue))
    print(graph)
    queue = collections.deque([(0, Color.kInit)])
    step = 0
    while queue:
      for _ in range(len(queue)):
        node, previousColor = queue.popleft()
        # visited node
        if res[node] == -1:
          res[node] = step
        # traverse all the neighbors of node
        for i, (v, color) in enumerate(graph[node]):
          if v == -1 or previousColor == color:
            continue
          queue.append((v, color))
          # mark the node as visited
          graph[node][i] = (-1, color)
      step += 1
    return res


p = Solution()
p.shortestAlternatingPaths(3, [[0, 1]], [[1, 2]])
