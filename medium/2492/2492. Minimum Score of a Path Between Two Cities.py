from collections import defaultdict, deque
from typing import List


class Solution:

    def minScore(self, n: int, roads: List[List[int]]) -> int:
        res = float('inf')
        graph = defaultdict(dict)

        for u, v, w in roads:
            graph[u][v] = graph[v][u] = w

        queue = deque([1])
        visited = set()
        while queue:
            city = queue.popleft()
            for route in graph[city].items():
                end, score = route
                if end not in visited:
                    visited.add(end)
                    queue.append(end)
                res = min(res,score)

        return res
