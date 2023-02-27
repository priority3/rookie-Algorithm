from typing import List


# Definition for a QuadTree node.
class Node:

    def __init__(self, val, isLeaf, topLeft, topRight, bottomLeft,
                 bottomRight):
        self.val = val
        self.isLeaf = isLeaf
        self.topLeft = topLeft
        self.topRight = topRight
        self.bottomLeft = bottomLeft
        self.bottomRight = bottomRight


class Solution:

    def construct(self, grid: List[List[int]]) -> 'Node':
        return self.dfs(grid, 0, 0, len(grid))

    def dfs(self, grid: List[List[int]], i: int, j: int, mid: int) -> 'Node':
        if self.isSame(grid, i, j, mid):
            return Node(grid[i][j] == 1, 1)
        node = Node(True, False)

        node.topLeft = self.dfs(grid, i, j, mid // 2)
        node.topRight = self.dfs(grid, i, j + mid // 2, mid // 2)
        node.bottomLeft = self.dfs(grid, i + mid // 2, j, mid // 2)
        node.bottomRight = self.dfs(grid, i + mid // 2, j + mid // 2, mid // 2)
        return node

    def isSame(self,grid, i, j, mid):
        for x in range(i, i + mid):
            for y in range(j, j + mid):
                if grid[x][y] != grid[i][j]:
                    return False
        return True
