# greatest common divisor
import math


def gcd(a:int,b:int):
  return a if b == 0 else gcd(b,a%b)
# Least common multiple
def lcm(a:int,b:int):
  return a * b / gcd(a,b)

class Solution:
    def nthMagicalNumber(self, n: int, a: int, b: int) -> int:
        lcm = math.lcm(a, b)
        left, right = 0, min(a, b) * n  # 开区间 (left, right)
        while left + 1 < right:  # 开区间不为空
            mid = (left + right) // 2
            if mid // a + mid // b - mid // lcm >= n:
                right = mid  # 范围缩小到 (left, mid)
            else:
                left = mid  # 范围缩小到 (mid, right)
        return right % (10 ** 9 + 7)


print(gcd(10,5))


print(lcm(10,5))
