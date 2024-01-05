from typing import List


def print_hi(name):
  print(f'Hi,{name}')


# 单调栈
class Solution:
  def canSeePersonsCount(self, heights: List[int]) -> List[int]:
    stack = []
    n = len(heights)
    res = [0] * n
    for i in range(n - 1, -1, -1):
      while stack and heights[i] > stack[-1]:
        stack.pop()
        res[i] += 1
      if stack:
        res[i] += 1
      stack.append(heights[i])
    return res


if __name__ == '__main__':
  # print_hi('hello world')
  p = Solution()
  p.canSeePersonsCount([10, 6, 8, 5, 11, 9])
