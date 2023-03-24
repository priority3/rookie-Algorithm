from typing import List
from collections import defaultdict


class Solution:

    def minReorder(self, n: int, connections: List[List[int]]) -> int:
        res = 0
        map = defaultdict(list)
        routes = set()
        for start, end in connections:
            routes.add((start, end))
            map[start].append(end)
            map[end].append(start)

        def dfs(cur, parent):
            nonlocal res
            res += (parent, cur) in routes
            for net in map[cur]:
                if net == parent:
                    continue
                dfs(net, cur)
            return res
        # parent -> cur
        dfs(0, -1)
        print(res)
        return res


p = Solution()
p.minReorder(6, [[0, 1], [1, 3], [2, 3], [4, 0], [4, 5]])
