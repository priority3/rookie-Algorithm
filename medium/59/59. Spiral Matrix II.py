from typing import List


class Solution:
  def generateMatrix(self, n: int) -> List[List[int]]:
    matrix = [[0 for i in range(n)] for j in range(n)]
    left, right, top, down, num = 0, n - 1, 0, n - 1, 1
    
    while left <= right and top <= down:
      for i in range(left, right + 1):
        matrix[top][i] = num
        num += 1
      top += 1
      for i in range(top, down + 1):
        matrix[i][right] = num
        num += 1
      right -= 1
      for i in range(right, left - 1, -1):
        matrix[down][i] = num
        num += 1
      down -= 1
      for i in range(down, top - 1, -1):
        matrix[i][left] = num
        num += 1
      left += 1
    print(matrix)
    return matrix


if __name__ == '__main__':
  p = Solution()
  p.generateMatrix(9)
