## leetcode https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/solutions/3337510/faster-than-98-9/
from typing import List

class Solution:

    def countPairs(self, n: int, edges: List[List[int]]) -> int:
        map = [[] for _ in range(n)]
        for i in range(len(edges)):
            map[edges[i][0]].append(edges[i][1])
            map[edges[i][1]].append(edges[i][0])
        res = n*n - n
        st = [True] * n
        for i in range(len(map)):
          if st[i]:
            st[i] = False
            q = [i]
            count = 0
            while q:
              count += 1
              for j in map[q.pop()]:
                if st[j]:
                  st[j] = False
                  q.append(j)
            res += count - count*count
        print(res>>1)
        return res >> 1
          
        
        
p = Solution()
p.countPairs(7, [[0,2],[0,5],[2,4],[1,6],[5,4]])
