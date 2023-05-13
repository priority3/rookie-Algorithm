def climbStairs(n: int) -> int:
  a, b = 1, 1
  
  for i in range(2, n + 1):
    a, b = b, b + a
  
  return b


if __name__ == '__main__':
  print(climbStairs(6))
