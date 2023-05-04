from typing import List


def max_value(n: int, c: int, v: List[int], w: List[int]) -> int:
  # dp[i][c] is meaning the maxvalue that put i in C
  dp = [[0] * (c + 1) for _ in range(n)]
  #   init
  for i in range(c + 1):
    dp[0][i] = w[i] if i >= w[i] else 0
  for i in range(n):
    for j in range(1, c + 1):
      pre = dp[i - 1][j]
      cur = 0
      if j > v[i]:
        cur = w[i] + dp[i - 1][j - v[i]]
      dp[i][j] = max(pre, cur)
  return 0


# optimum `max_value`

def op_max_value(n: int, c: int, v: List[int], w: List[int]) -> int:
  dp = [0] * (c + 1)
  
  for i in range(n):
    for j in range(c, v[i] - 1, -1):
      pre = dp[j]
      cur = w[i] + dp[j - v[i]]
      dp[j] = max(pre, cur)
  return dp[c]


if __name__ == '__main__':
  N = int(input())
  C = int(input())
  v = [0] * N
  w = [0] * N
  for i in range(N):
    v[i] = int(input())
    w[i] = int(input())
  
  print('max value: ', max_value(N, C, v, w))
