from typing import List


class Solution:

    def maxValue(self, grid: List[List[int]]) -> int:
        lenm = len(grid)
        lenn = len(grid[0])
        for i in range(lenm):
            for j in range(lenn):
                if i == 0 and j == 0: continue
                if i == 0: grid[i][j] += grid[i][j - 1]
                elif j == 0: grid[i][j] += grid[i - 1][j]
                else: grid[i][j] += max(grid[i][j - 1], grid[i - 1][j])
        print(grid)
        return grid[-1][-1]


p = Solution()
print(p.maxValue([[1, 3, 1], [1, 5, 1], [4, 2, 1]]))
