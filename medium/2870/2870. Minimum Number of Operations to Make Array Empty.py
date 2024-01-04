from typing import List


class Solution:
  def minOperations(self, nums: List[int]) -> int:
    map = {}
    for i in nums:
      map[i] = 0
    for i in nums:
      map[i] += 1
    print(map)
    res = 0
    for k in map:
      val = map[k]
      if val >= 3:
        if val % 3 == 0:
          res += val // 3
        elif val % 3 == 1 or val % 3 == 2:
          temp = val // 3
          res += temp + 1
      elif val == 2:
        res += 1
      else:
        res = -1
        break
    print(res)
    return res


p = Solution()
p.minOperations([2, 3, 3, 2, 2, 4, 2, 3, 4])
