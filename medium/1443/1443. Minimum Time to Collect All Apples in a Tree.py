from collections import defaultdict, deque
from typing import List


class Solution:
  
  def minTime (self, n: int, edges: List[List[int]], hasApple: List[bool]) -> int:
    adj_just = defaultdict(set)
    
    # set edges
    for u, v in edges:
      adj_just[u].add(v)
      adj_just[v].add(u)
    
    #
    def dfs () -> int:
      N = len(hasApple)
      E = len(edges)
      
      indegrees = [0] * N
      
      # get indegre
      for u, v in edges:
        indegrees[v] += 1
        indegrees[u] += 1
      
      queue = deque()
      for i, ind in enumerate(indegrees):
        # if there's only 1 in-edge and there's no apple
        if ind == 1 and not hasApple[i]:
          # add for removal
          queue.append(i)
      removed_nodes = 0
      while queue:
        node = queue.popleft()
        
        # we cannot remove root in any case
        if node == 0:
          continue
        
        for neighbor in adj_just[node]:
          adj_just[neighbor].discard(node)
          indegrees[neighbor] -= 1
          if indegrees[neighbor] == 1 and not hasApple[neighbor]:
            queue.append(neighbor)
          removed_nodes += 1
      # (all edges - edges_to_empty_nodes) * 2
      return (E - removed_nodes) * 2
    
    return dfs()


if __name__ == '__main__':
  # arr = [1, 2, 3, 5, 4, 7]
  # for i, value in enumerate(arr):
  #   print(i, value)
  p = Solution()
  print(
    p.minTime(7, [[0, 1], [0, 2], [1, 4], [1, 5], [2, 3], [2, 6]], [False, False, False, False, False, False, False])
  )
