from functools import cmp_to_key
from typing import List


class Solution:
    def maximumUnits(self, boxTypes: List[List[int]], truckSize: int) -> int:
      boxTypes = sorted(boxTypes,key = cmp_to_key(lambda a,b : b[1] - a[1]))
      res = 0
      for arr in boxTypes:
        if truckSize == 0:
          break
        res += min(arr[0],truckSize) * arr[1]
        truckSize -= min(arr[0],truckSize)  
      print(res)
      return res  

p = Solution()
p.maximumUnits([[1,3],[2,2],[3,1]],4)
