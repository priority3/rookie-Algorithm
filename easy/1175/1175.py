from itertools import chain
import math


class Solution:
  def getPrimeNumber(n:int) -> int:
    res = 1
    for i in range(2,n+1):
      for j in range(2,i):
        if i % j == 0:
          res += 1
    return res
  def numPrimeArrangements(self, n: int) -> int:
    mod = 10 ** 9 + 7
    # 非质数
    diff = Solution.getPrimeNumber(n)
    # 质数
    prime = n - diff
    res = 1
    for i in chain(range(2, prime + 1), range(2, diff+1)):
      res = (res * i) % mod
    return res
